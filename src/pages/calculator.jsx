// calculator.jsx

"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import 'katex/dist/katex.min.css';

// Adjust import paths based on your actual file structure
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import GraphingTab from "../components/calculator/GraphingTab"
import CalculusTab from "../components/calculator/CalculusTab"
import LinearAlgebraTab from "../components/calculator/LinearAlgebraTab"
import ParametricTab from "../components/calculator/ParametricTab"
import { MathParser, derivativeCache } from "../lib/calculator/math-utils"

/**
 * @typedef {import('../lib/calculator/math-utils').CompiledExpression} CompiledExpression
 */

/**
 * @typedef {object} FunctionPlotData
 * @property {number} id - Unique identifier for the function.
 * @property {string} expression - The mathematical expression as a string for display.
 * @property {string} [originalExpression] - The raw, parsable expression for derivatives.
 * @property {string} color - The hex color code for plotting.
 * @property {boolean} visible - Whether the function is visible on the graph.
 * @property {'function' | 'derivative' | 'integral' | 'parametric'} type - The type of function.
 * @property {number | null} parentId - The ID of the parent function if it's a derivative or integral.
 * @property {CompiledExpression | null} compiled - The mathjs compiled object for the function.
 * @property {string} [xExpression] - For parametric functions, the x(t) expression.
 * @property {string} [yExpression] - For parametric functions, the y(t) expression.
 * @property {CompiledExpression | null} [compiledX] - For parametric functions, the compiled x(t) function.
 * @property {CompiledExpression | null} [compiledY] - For parametric functions, the compiled y(t) function.
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
    originalExpression: "x^2",
    color: "#06b6d4",
    visible: true,
    type: "function",
    parentId: null,
    compiled: MathParser.parseFunction("x^2"),
  },
]

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState("graphing")
  const [functions, setFunctions] = useState(initialFunctions)
  const [newFunctionInput, setNewFunctionInput] = useState("")

  const [xMin, setXMin] = useState(-10)
  const [xMax, setXMax] = useState(10)
  const [yMin, setYMin] = useState(-10)
  const [yMax, setYMax] = useState(10)

  const [integralBounds, setIntegralBounds] = useState({ a: -2, b: 2, functionId: 1 })
  const [showIntegralArea, setShowIntegralArea] = useState(true)

  const [animationState, setAnimationState] = useState({
    isPlaying: false,
    functionId: null,
    currentT: 0,
    duration: 8, // Animation duration in seconds
  })
  const animationFrameRef = useRef()

  const mathSymbols = [
    { symbol: "π", value: "pi" }, { symbol: "e", value: "e" }, { symbol: "sin", value: "sin(" },
    { symbol: "cos", value: "cos(" }, { symbol: "tan", value: "tan(" }, { symbol: "ln", value: "ln(" },
    { symbol: "log", value: "log(" }, { symbol: "√", value: "sqrt(" }, { symbol: "^", value: "^" },
    { symbol: "|x|", value: "abs(" }, { symbol: "exp", value: "exp(" },
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
        originalExpression: newFunctionInput,
        color: colors[newId % colors.length],
        visible: true,
        type: "function",
        parentId: null,
        compiled: MathParser.parseFunction(newFunctionInput),
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
            updatedFunc.compiled = MathParser.parseFunction(updates.expression)
            updatedFunc.originalExpression = updates.expression;
            // Clear derivative cache related to the old expression
            derivativeCache.delete(`derivative_of_${f.expression}`)
          }
          return updatedFunc
        }
        return f
      }),
    )
  }, [])

  const handleRemoveFunction = useCallback(
    (idToRemove) => {
      if (animationState.functionId === idToRemove) {
        setAnimationState({ isPlaying: false, functionId: null, currentT: 0, duration: 5 })
      }

      const funcToRemove = functions.find((f) => f.id === idToRemove)
      if (funcToRemove) {
        const expr = funcToRemove.originalExpression || funcToRemove.expression;
        derivativeCache.delete(`derivative_of_${expr}`)
      }

      setFunctions((prevFuncs) => {
        const newFuncs = prevFuncs.filter((f) => f.id !== idToRemove && f.parentId !== idToRemove)
        if (integralBounds.functionId === idToRemove) {
          const firstOriginalFunction = newFuncs.find((f) => f.type === "function")
          if (firstOriginalFunction) {
            setIntegralBounds((prev) => ({ ...prev, functionId: firstOriginalFunction.id }))
          } else if (newFuncs.length > 0) {
            setIntegralBounds((prev) => ({ ...prev, functionId: newFuncs[0].id }))
          } else {
            setIntegralBounds({ a: -2, b: 2, functionId: -1 })
          }
        }
        return newFuncs
      })
    },
    [integralBounds.functionId, animationState.functionId, functions],
  )

  const handleAddDerivative = useCallback(
    (parentId) => {
      const parentFunc = functions.find((f) => f.id === parentId)
      if (!parentFunc || !parentFunc.compiled) return
      const newId = Math.max(0, ...functions.map((f) => f.id)) + 1
      const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]

      const { simplified: derivativeExpression } = MathParser.derivativeToLatex(parentFunc.originalExpression, "x")
      const compiledDerivative = MathParser.parseFunction(derivativeExpression)

      const displayExpr = `d/dx(${parentFunc.expression.substring(0, 10) + (parentFunc.expression.length > 10 ? "..." : "")})`

      setFunctions((prev) => [
        ...prev,
        {
          id: newId,
          expression: displayExpr,
          originalExpression: derivativeExpression,
          color: colors[newId % colors.length],
          visible: true,
          type: "derivative",
          parentId: parentId,
          compiled: compiledDerivative,
        },
      ])
    },
    [functions],
  )

  const handleAddIntegral = useCallback(
    (parentId) => {
      const parentFunc = functions.find((f) => f.id === parentId)
      if (!parentFunc || !parentFunc.compiled) return
      const newId = Math.max(0, ...functions.map((f) => f.id)) + 1
      const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]
      const displayExpr = `∫(${parentFunc.expression.substring(0, 10) + (parentFunc.expression.length > 10 ? "..." : "")})dx`

      const { simplified: integralExpression } = MathParser.symbolicIntegralToLatex(parentFunc.originalExpression, "x")
      
      const integralFunc = MathParser.antiderivative(parentFunc.compiled, 0)

      setFunctions((prev) => [
        ...prev,
        {
          id: newId,
          expression: displayExpr,
          originalExpression: integralExpression,
          color: colors[newId % colors.length],
          visible: true,
          type: "integral",
          parentId: parentId,
          compiled: integralFunc,
        },
      ])
    },
    [functions, xMin],
  )

  const handleAddParametric = useCallback(
    (xExpr, yExpr, tMin, tMax) => {
      const newId = Math.max(0, ...functions.map((f) => f.id)) + 1
      const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]

      const compiledX = MathParser.parseFunction(xExpr)
      const compiledY = MathParser.parseFunction(yExpr)

      if (!compiledX || !compiledY) {
        console.error("Error parsing parametric functions.")
        return
      }

      setFunctions((prev) => [
        ...prev,
        {
          id: newId,
          expression: `(${xExpr.length > 5 ? xExpr.substring(0,5)+'...' : xExpr}, ${yExpr.length > 5 ? yExpr.substring(0,5)+'...' : yExpr})`,
          xExpression: xExpr,
          yExpression: yExpr,
          color: colors[newId % colors.length],
          visible: true,
          type: "parametric",
          parentId: null,
          compiled: null,
          compiledX: compiledX,
          compiledY: compiledY,
          tMin: tMin,
          tMax: tMax,
        },
      ])
    },
    [functions],
  )

  useEffect(() => {
    if (functions.length === 0) derivativeCache.clear()
  }, [functions])

  // Animation loop for parametric tracing
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      setAnimationState((prev) => {
        if (!prev.isPlaying) return prev

        const func = functions.find((f) => f.id === prev.functionId)
        if (!func || func.type !== "parametric") {
          return { ...prev, isPlaying: false }
        }

        const tRange = func.tMax - func.tMin
        const tStep = tRange / (prev.duration * 60) // Assuming 60fps

        const newT = prev.currentT + tStep
        if (newT >= func.tMax) {
          return { ...prev, currentT: func.tMax, isPlaying: false }
        }
        return { ...prev, currentT: newT }
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    if (animationState.isPlaying) {
      animationFrameId = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [animationState.isPlaying, functions])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0f172a" }}>
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
            <motion.div className="p-6 pb-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <TabsList
                className="grid w-full grid-cols-4 h-14 p-1"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)",
                }}
              >
                <TabsTrigger value="graphing" className="text-slate-300 rounded-xl transition-all duration-200 data-[state=active]:text-white data-[state=active]:bg-blue-600 data-[state=active]:shadow-lg font-medium">
                  📈 Graphing
                </TabsTrigger>
                <TabsTrigger value="calculus" className="text-slate-300 rounded-xl transition-all duration-200 data-[state=active]:text-white data-[state=active]:bg-green-600 data-[state=active]:shadow-lg font-medium">
                  🧮 Calculus
                </TabsTrigger>
                <TabsTrigger value="parametric" className="text-slate-300 rounded-xl transition-all duration-200 data-[state=active]:text-white data-[state=active]:bg-orange-600 data-[state=active]:shadow-lg font-medium">
                  📐 Parametric
                </TabsTrigger>
                <TabsTrigger value="linear-algebra" className="text-slate-300 rounded-xl transition-all duration-200 data-[state=active]:text-white data-[state=active]:bg-purple-600 data-[state=active]:shadow-lg font-medium">
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
                    xMin={xMin} setXMin={setXMin} xMax={xMax} setXMax={setXMax}
                    yMin={yMin} setYMin={setYMin} yMax={yMax} setYMax={setYMax}
                    integralBounds={integralBounds} setIntegralBounds={setIntegralBounds}
                    showIntegralArea={showIntegralArea} setShowIntegralArea={setShowIntegralArea}
                    mathSymbols={mathSymbols} addSymbolToInput={addSymbolToInput}
                    newFunctionInput={newFunctionInput} setNewFunctionInput={setNewFunctionInput}
                    onAddFunction={handleAddFunction} onAddDerivative={handleAddDerivative}
                    onAddIntegral={handleAddIntegral} onUpdateFunction={handleUpdateFunction}
                    onRemoveFunction={handleRemoveFunction}
                    animationState={animationState} setAnimationState={setAnimationState}
                  />
                </TabsContent>
                <TabsContent value="calculus">
                  <CalculusTab
                    setActiveTab={setActiveTab} setFunctions={setFunctions}
                    functions={functions} mathSymbols={mathSymbols} addSymbolToInput={addSymbolToInput}
                    globalXMin={xMin} globalXMax={xMax}
                  />
                </TabsContent>
                <TabsContent value="parametric">
                  <ParametricTab
                    functions={functions} setFunctions={setFunctions}
                    mathSymbols={mathSymbols} addSymbolToInput={addSymbolToInput}
                    onAddParametric={handleAddParametric} onUpdateFunction={handleUpdateFunction}
                    onRemoveFunction={handleRemoveFunction} setActiveTab={setActiveTab}
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

      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        @keyframes pulse { 0% { opacity: 0.03; } 50% { opacity: 0.06; } 100% { opacity: 0.03; } }
        .bg-animate { animation: pulse 8s ease-in-out infinite; }
      `}</style>
    </div>
  )
}