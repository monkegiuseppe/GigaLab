// calculator.jsx

"use client"

import { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"

// Adjust import paths based on your actual file structure
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import GraphingTab from "../components/calculator/GraphingTab"
import CalculusTab from "../components/calculator/CalculusTab"
import LinearAlgebraTab from "../components/calculator/LinearAlgebraTab"
import ParametricTab from "../components/calculator/ParametricTab"
import { MathParser, derivativeCache } from "../lib/calculator/math-utils"

/**
 * @typedef {object} FunctionPlotData
 * @property {number} id - Unique identifier for the function.
 * @property {string} expression - The mathematical expression as a string.
 * @property {string} color - The hex color code for plotting.
 * @property {boolean} visible - Whether the function is visible on the graph.
 * @property {'function' | 'derivative' | 'integral' | 'parametric'} type - The type of function.
 * @property {number | null} parentId - The ID of the parent function if it's a derivative or integral.
 * @property {Array<{x: number, y: number}>} points - Calculated points for plotting.
 * @property {Array<{x: number, y: number}>} integralPoints - Calculated points for the integral area.
 * @property {import('../lib/calculator/math-utils').ParsedFunction | null} parsedFunc - The executable function parsed from the expression.
 * @property {string} [xExpression] - For parametric functions, the x(t) expression.
 * @property {string} [yExpression] - For parametric functions, the y(t) expression.
 * @property {import('../lib/calculator/math-utils').ParsedFunction | null} [parsedXFunc] - For parametric functions, the parsed x(t) function.
 * @property {import('../lib/calculator/math-utils').ParsedFunction | null} [parsedYFunc] - For parametric functions, the parsed y(t) function.
 * @property {number} [tMin] - For parametric functions, the minimum t value.
 * @property {number} [tMax] - For parametric functions, the maximum t value.
 */

/**
 * @type {FunctionPlotData[]}
 */
const initialFunctions = [
  {
    id: 1,
    expression: "x^2",
    color: "#06b6d4",
    visible: true,
    type: "function",
    parentId: null,
    points: [],
    integralPoints: [],
    parsedFunc: MathParser.parseFunction("x^2"),
  },
]

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState("graphing")
  const [functions, setFunctions] = useState(initialFunctions)
  const [newFunctionInput, setNewFunctionInput] = useState("")

  const [xMin, setXMin] = useState(-10)
  const [xMax, setXMax] = useState(10)
  const [yMin, setYMin] = useState(-10) // New state for Y-min
  const [yMax, setYMax] = useState(10) // New state for Y-max

  const [integralBounds, setIntegralBounds] = useState({ a: -2, b: 2, functionId: 1 })
  const [showIntegralArea, setShowIntegralArea] = useState(true)

  const mathSymbols = [
    { symbol: "π", value: "pi" },
    { symbol: "e", value: "e" },
    { symbol: "sin", value: "sin(" },
    { symbol: "cos", value: "cos(" },
    { symbol: "tan", value: "tan(" },
    { symbol: "ln", value: "ln(" },
    { symbol: "log", value: "log(" },
    { symbol: "√", value: "sqrt(" },
    { symbol: "^", value: "^" },
    { symbol: "|x|", value: "abs(" },
    { symbol: "exp", value: "exp(" },
  ]

  const addSymbolToInput = useCallback((symbol, targetSetter) => {
    targetSetter((prev) => prev + symbol)
  }, [])

  const handleAddFunction = useCallback(() => {
    if (newFunctionInput.trim()) {
      const newId = Math.max(0, ...functions.map((f) => f.id)) + 1
      const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]
      const newFunc = {
        id: newId,
        expression: newFunctionInput,
        color: colors[newId % colors.length],
        visible: true,
        type: "function",
        parentId: null,
        points: [],
        integralPoints: [],
        parsedFunc: MathParser.parseFunction(newFunctionInput),
      }
      setFunctions((prev) => [...prev, newFunc])
      setNewFunctionInput("")
      if (
        functions.length === 0 ||
        !functions.find((f) => f.id === integralBounds.functionId && f.type === "function")
      ) {
        setIntegralBounds((prev) => ({ ...prev, functionId: newId }))
      }
    }
  }, [newFunctionInput, functions, integralBounds.functionId])

  const handleUpdateFunction = useCallback((id, updates) => {
    setFunctions((prevFuncs) =>
      prevFuncs.map((f) => {
        if (f.id === id) {
          const updatedFunc = { ...f, ...updates }
          if (updates.expression && updates.expression !== f.expression) {
            const oldExpressionKey = f.parsedFunc?.originalExpression || f.expression
            updatedFunc.parsedFunc = MathParser.parseFunction(updates.expression)
            derivativeCache.forEach((_, key) => {
              if (key.startsWith(oldExpressionKey)) {
                derivativeCache.delete(key)
              }
            })
          }
          return updatedFunc
        }
        return f
      }),
    )
  }, [])

  const handleRemoveFunction = useCallback(
    (idToRemove) => {
      setFunctions((prevFuncs) => {
        const newFuncs = prevFuncs.filter((f) => f.id !== idToRemove && f.parentId !== idToRemove)
        if (integralBounds.functionId === idToRemove) {
          const firstOriginalFunction = newFuncs.find((f) => f.type === "function")
          if (firstOriginalFunction) {
            setIntegralBounds((prev) => ({ ...prev, functionId: firstOriginalFunction.id }))
          } else if (newFuncs.length > 0) {
            setIntegralBounds((prev) => ({ ...prev, functionId: newFuncs[0].id }))
          } else {
            // No functions left, reset integral bounds
            setIntegralBounds({ a: -2, b: 2, functionId: -1 }) // Indicate no valid function
          }
        }
        return newFuncs
      })
    },
    [integralBounds.functionId],
  )

  const handleAddDerivative = useCallback(
    (parentId) => {
      const parentFunc = functions.find((f) => f.id === parentId)
      if (!parentFunc || !parentFunc.parsedFunc) return
      const newId = Math.max(0, ...functions.map((f) => f.id)) + 1
      const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]
      const displayExpr = `d/dx(${parentFunc.expression.substring(0, 10) + (parentFunc.expression.length > 10 ? "..." : "")})`
      const derivativeFunc = (x) => MathParser.derivative(parentFunc.parsedFunc, x)
      derivativeFunc.originalExpression = `derivative_of_${parentFunc.parsedFunc.originalExpression || parentFunc.expression}`
      setFunctions((prev) => [
        ...prev,
        {
          id: newId,
          expression: displayExpr,
          color: colors[newId % colors.length],
          visible: true,
          type: "derivative",
          parentId: parentId,
          points: [],
          integralPoints: [],
          parsedFunc: derivativeFunc,
        },
      ])
    },
    [functions],
  )

  const handleAddIntegral = useCallback(
    (parentId) => {
      const parentFunc = functions.find((f) => f.id === parentId)
      if (!parentFunc || !parentFunc.parsedFunc) return
      const newId = Math.max(0, ...functions.map((f) => f.id)) + 1
      const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]
      const displayExpr = `∫(${parentFunc.expression.substring(0, 10) + (parentFunc.expression.length > 10 ? "..." : "")})dx`
      const integralFunc = MathParser.antiderivative(parentFunc.parsedFunc, xMin)
      setFunctions((prev) => [
        ...prev,
        {
          id: newId,
          expression: displayExpr,
          color: colors[newId % colors.length],
          visible: true,
          type: "integral",
          parentId: parentId,
          points: [],
          integralPoints: [],
          parsedFunc: integralFunc,
        },
      ])
    },
    [functions, xMin],
  )

  const handleAddParametric = useCallback(
    (xExpr, yExpr, tMin, tMax) => {
      const newId = Math.max(0, ...functions.map((f) => f.id)) + 1
      const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]

      try {
        const parsedXFunc = MathParser.parseFunction(xExpr.replace(/t/g, "x"))
        const parsedYFunc = MathParser.parseFunction(yExpr.replace(/t/g, "x"))

        setFunctions((prev) => [
          ...prev,
          {
            id: newId,
            expression: `(${xExpr}, ${yExpr})`,
            xExpression: xExpr,
            yExpression: yExpr,
            color: colors[newId % colors.length],
            visible: true,
            type: "parametric",
            parentId: null,
            points: [],
            integralPoints: [],
            parsedFunc: null,
            parsedXFunc: parsedXFunc,
            parsedYFunc: parsedYFunc,
            tMin: tMin,
            tMax: tMax,
          },
        ])
      } catch (error) {
        console.error("Error parsing parametric functions:", error)
      }
    },
    [functions],
  )

  useEffect(() => {
    if (functions.length === 0) derivativeCache.clear()
  }, [functions])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f172a" }}>
      {/* Background animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <motion.div
          className="backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden"
          style={{
            backgroundColor: "rgba(30, 41, 59, 0.8)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(148, 163, 184, 0.2)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div
            className="p-8 border-b border-slate-700/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              background:
                "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
            }}
          >
            <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Advanced Calculator
            </h1>
            <p className="text-slate-300 text-lg">Graphing, calculus, parametric equations, and linear algebra tools</p>
          </motion.div>

          <Tabs defaultValue="graphing" onValueChange={setActiveTab}>
            <motion.div
              className="p-6 pb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <TabsList
                className="grid w-full grid-cols-4 h-14 p-1"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)",
                }}
              >
                <TabsTrigger
                  value="graphing"
                  className="text-slate-300 rounded-xl transition-all duration-200 data-[state=active]:text-white data-[state=active]:bg-blue-600 data-[state=active]:shadow-lg font-medium"
                >
                  📈 Graphing
                </TabsTrigger>
                <TabsTrigger
                  value="calculus"
                  className="text-slate-300 rounded-xl transition-all duration-200 data-[state=active]:text-white data-[state=active]:bg-green-600 data-[state=active]:shadow-lg font-medium"
                >
                  🧮 Calculus
                </TabsTrigger>
                <TabsTrigger
                  value="parametric"
                  className="text-slate-300 rounded-xl transition-all duration-200 data-[state=active]:text-white data-[state=active]:bg-orange-600 data-[state=active]:shadow-lg font-medium"
                >
                  📐 Parametric
                </TabsTrigger>
                <TabsTrigger
                  value="linear-algebra"
                  className="text-slate-300 rounded-xl transition-all duration-200 data-[state=active]:text-white data-[state=active]:bg-purple-600 data-[state=active]:shadow-lg font-medium"
                >
                  🔢 Linear Algebra
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <div className="p-8 pt-6">
              <div className="min-h-[800px] overflow-y-auto">
                <TabsContent value="graphing">
                  <GraphingTab
                    functions={functions}
                    setFunctions={setFunctions}
                    xMin={xMin}
                    setXMin={setXMin}
                    xMax={xMax}
                    setXMax={setXMax}
                    yMin={yMin}
                    setYMin={setYMin}
                    yMax={yMax}
                    setYMax={setYMax}
                    integralBounds={integralBounds}
                    setIntegralBounds={setIntegralBounds}
                    showIntegralArea={showIntegralArea}
                    setShowIntegralArea={setShowIntegralArea}
                    mathSymbols={mathSymbols}
                    addSymbolToInput={addSymbolToInput}
                    newFunctionInput={newFunctionInput}
                    setNewFunctionInput={setNewFunctionInput}
                    onAddFunction={handleAddFunction}
                    onAddDerivative={handleAddDerivative}
                    onAddIntegral={handleAddIntegral}
                    onUpdateFunction={handleUpdateFunction}
                    onRemoveFunction={handleRemoveFunction}
                  />
                </TabsContent>
                <TabsContent value="calculus">
                  <CalculusTab
                    setActiveTab={setActiveTab}
                    setFunctions={setFunctions}
                    functions={functions}
                    mathSymbols={mathSymbols}
                    addSymbolToInput={addSymbolToInput}
                    globalXMin={xMin}
                    globalXMax={xMax}
                  />
                </TabsContent>
                <TabsContent value="parametric">
                  <ParametricTab
                    functions={functions}
                    setFunctions={setFunctions}
                    mathSymbols={mathSymbols}
                    addSymbolToInput={addSymbolToInput}
                    onAddParametric={handleAddParametric}
                    onUpdateFunction={handleUpdateFunction}
                    onRemoveFunction={handleRemoveFunction}
                    setActiveTab={setActiveTab}
                  />
                </TabsContent>
                <TabsContent value="linear-algebra">
                  <LinearAlgebraTab />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </motion.div>
      </div>

      {/* CSS for background patterns */}
      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @keyframes pulse {
          0% { opacity: 0.03; }
          50% { opacity: 0.06; }
          100% { opacity: 0.03; }
        }
        
        .bg-animate {
          animation: pulse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}