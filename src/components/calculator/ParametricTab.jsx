// ParametricTab.jsx

"use client"

import { useState } from "react"
// Added Pause icon
import { Compass, Eye, EyeOff, Plus, X, Sparkles, Play} from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { motion } from "framer-motion"

//  Added missing props for animation
export default function ParametricTab({
  functions,
  setFunctions,
  mathSymbols,
  addSymbolToInput,
  onAddParametric,
  onUpdateFunction,
  onRemoveFunction,
  setActiveTab,

}) {
  const [xExpression, setXExpression] = useState("cos(t)")
  const [yExpression, setYExpression] = useState("sin(t)")
  const [tMin, setTMin] = useState(0)
  const [tMax, setTMax] = useState(6.28) // 2π

  const parametricFunctions = functions.filter((f) => f.type === "parametric")

  const handleAddParametric = () => {
    if (xExpression.trim() && yExpression.trim()) {
      onAddParametric(xExpression, yExpression, tMin, tMax)
      // Reset to default values after adding
      setXExpression("cos(t)")
      setYExpression("sin(t)")
      setTMin(0)
      setTMax(6.28)
    }
  }

  const handleUpdateParametric = (id, field, value) => {
    const func = functions.find((f) => f.id === id)
    if (!func || func.type !== "parametric") return

    const updates = { [field]: value }

    // If updating expressions, also update parsed functions
    if (field === "xExpression" || field === "yExpression") {
      try {
        if (field === "xExpression") {
          const { MathParser } = require("../../lib/calculator/math-utils")
          updates.parsedXFunc = MathParser.parseFunction(value.replace(/t/g, "x"))
          updates.expression = `(${value}, ${func.yExpression})`
        } else {
          const { MathParser } = require("../../lib/calculator/math-utils")
          updates.parsedYFunc = MathParser.parseFunction(value.replace(/t/g, "x"))
          updates.expression = `(${func.xExpression}, ${value})`
        }
      } catch (error) {
        console.error("Error parsing parametric function:", error)
        return
      }
    }

    onUpdateFunction(id, updates)
  }

  const presetCurves = [
    {
      name: "Circle",
      x: "cos(t)",
      y: "sin(t)",
      tMin: 0,
      tMax: 6.28,
      description: "Perfect unit circle",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Ellipse",
      x: "3*cos(t)",
      y: "2*sin(t)",
      tMin: 0,
      tMax: 6.28,
      description: "Ellipse with a=3, b=2",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Spiral",
      x: "t*cos(t)",
      y: "t*sin(t)",
      tMin: 0,
      tMax: 12.56,
      description: "Archimedean spiral",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Lissajous",
      x: "sin(3*t)",
      y: "sin(2*t)",
      tMin: 0,
      tMax: 6.28,
      description: "Lissajous curve (3:2)",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Cycloid",
      x: "t - sin(t)",
      y: "1 - cos(t)",
      tMin: 0,
      tMax: 12.56,
      description: "Cycloid curve",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Rose",
      x: "cos(4*t)*cos(t)",
      y: "cos(4*t)*sin(t)",
      tMin: 0,
      tMax: 6.28,
      description: "4-petaled rose",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const loadPreset = (preset) => {
    setXExpression(preset.x)
    setYExpression(preset.y)
    setTMin(preset.tMin)
    setTMax(preset.tMax)
  }

  const addPresetToGraph = (preset) => {
    onAddParametric(preset.x, preset.y, preset.tMin, preset.tMax)
    setActiveTab("graphing")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Compass className="w-6 h-6 text-orange-400" />
        <h3 className="text-2xl font-semibold text-white">Parametric Equations</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Input Controls */}
        <div className="space-y-6">
          {/* Math Symbols */}
          <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-5 shadow-lg">
            <Label className="text-slate-300 text-sm mb-3 block font-medium">Quick Symbols</Label>
            <div className="grid grid-cols-4 gap-2">
              {mathSymbols.map((sym) => (
                <Button
                  key={sym.symbol}
                  onClick={() => {
                    // Add to whichever input was last focused, default to x
                    addSymbolToInput(sym.value, setXExpression)
                  }}
                  className="h-9 text-xs bg-slate-700/50 hover:bg-slate-600/70 text-slate-200 border border-slate-600/50 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105"
                >
                  {sym.symbol}
                </Button>
              ))}
            </div>
          </div>

          {/* Function Input */}
          <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-5 shadow-lg space-y-4">
            <div>
              <Label className="text-slate-200 text-sm font-medium mb-2 block">x(t) =</Label>
              <Input
                value={xExpression}
                onChange={(e) => setXExpression(e.target.value)}
                placeholder="e.g., cos(t)"
                className="bg-slate-700/50 border-slate-600/50 text-slate-200 rounded-xl backdrop-blur-sm transition-all duration-200 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
              />
            </div>
            <div>
              <Label className="text-slate-200 text-sm font-medium mb-2 block">y(t) =</Label>
              <Input
                value={yExpression}
                onChange={(e) => setYExpression(e.target.value)}
                placeholder="e.g., sin(t)"
                className="bg-slate-700/50 border-slate-600/50 text-slate-200 rounded-xl backdrop-blur-sm transition-all duration-200 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-slate-200 text-sm font-medium mb-2 block">t min</Label>
                <Input
                  type="number"
                  value={tMin}
                  onChange={(e) => setTMin(Number(e.target.value))}
                  className="bg-slate-700/50 border-slate-600/50 text-slate-200 rounded-xl backdrop-blur-sm transition-all duration-200 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
                />
              </div>
              <div>
                <Label className="text-slate-200 text-sm font-medium mb-2 block">t max</Label>
                <Input
                  type="number"
                  value={tMax}
                  onChange={(e) => setTMax(Number(e.target.value))}
                  className="bg-slate-700/50 border-slate-600/50 text-slate-200 rounded-xl backdrop-blur-sm transition-all duration-200 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20"
                />
              </div>
            </div>
            <div className="pt-2">
              <Button
                onClick={handleAddParametric}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Function
              </Button>
            </div>
          </div>

          {/* Current Functions */}
          <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-5 shadow-lg">
            <h4 className="text-slate-200 font-medium mb-4 flex items-center gap-2">
              <Play className="w-4 h-4 text-orange-400" />
              Active Functions
            </h4>
            {parametricFunctions.length === 0 ? (
              <div className="text-slate-400 text-sm text-center py-6 border-2 border-dashed border-slate-600/30 rounded-xl">
                No parametric functions added yet
              </div>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {parametricFunctions.map((func) => (
                  <motion.div
                    key={func.id}
                    className="backdrop-blur-xl bg-slate-700/40 border border-slate-600/30 rounded-xl p-4 shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: func.color }} />
                      <span className="text-slate-200 text-sm font-mono flex-1 truncate">
                        ({func.xExpression}, {func.yExpression})
                      </span>
                      <Button
                        onClick={() => onUpdateFunction(func.id, { visible: !func.visible })}
                        className="text-slate-400 hover:text-slate-200 h-8 w-8 p-0 rounded-lg hover:bg-slate-600/50 transition-all duration-200 flex items-center justify-center shrink-0"
                      >
                        {func.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </Button>
                      <Button
                        onClick={() => onRemoveFunction(func.id)}
                        className="text-red-400 hover:text-red-300 h-8 w-8 p-0 rounded-lg hover:bg-red-900/20 transition-all duration-200 flex items-center justify-center shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <Label className="text-slate-400 text-xs">x(t)</Label>
                        <Input
                          value={func.xExpression}
                          onChange={(e) => handleUpdateParametric(func.id, "xExpression", e.target.value)}
                          className="bg-slate-800/50 border-slate-600/50 text-slate-200 text-xs h-8 rounded-lg backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-slate-400 text-xs">y(t)</Label>
                        <Input
                          value={func.yExpression}
                          onChange={(e) => handleUpdateParametric(func.id, "yExpression", e.target.value)}
                          className="bg-slate-800/50 border-slate-600/50 text-slate-200 text-xs h-8 rounded-lg backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-slate-400 text-xs">t min</Label>
                        <Input
                          type="number"
                          value={func.tMin}
                          onChange={(e) => handleUpdateParametric(func.id, "tMin", Number(e.target.value))}
                          className="bg-slate-800/50 border-slate-600/50 text-slate-200 text-xs h-8 rounded-lg backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <Label className="text-slate-400 text-xs">t max</Label>
                        <Input
                          type="number"
                          value={func.tMax}
                          onChange={(e) => handleUpdateParametric(func.id, "tMax", Number(e.target.value))}
                          className="bg-slate-800/50 border-slate-600/50 text-slate-200 text-xs h-8 rounded-lg backdrop-blur-sm"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Columns - Preset Curves */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            Preset Curves
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {presetCurves.map((preset, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-slate-200 font-semibold text-lg">{preset.name}</h4>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => loadPreset(preset)}
                      className="bg-slate-600 hover:bg-slate-700 text-white text-sm h-9 px-4 py-1 rounded-xl transition-all duration-200 hover:scale-105 font-medium"
                    >
                      Load
                    </Button>
                    <Button
                      onClick={() => addPresetToGraph(preset)}
                      className={`bg-gradient-to-r ${preset.color} hover:shadow-lg text-white text-sm h-9 px-4 py-1 rounded-xl transition-all duration-200 hover:scale-105 font-medium`}
                    >
                      Graph
                    </Button>
                  </div>
                </div>
                <div className="text-slate-400 text-sm mb-4">{preset.description}</div>
                <div className="space-y-2 text-xs font-mono backdrop-blur-sm bg-slate-700/30 p-3 rounded-xl">
                  <div className="text-slate-300">
                    <span className="text-orange-300">x(t)</span> = {preset.x}
                  </div>
                  <div className="text-slate-300">
                    <span className="text-orange-300">y(t)</span> = {preset.y}
                  </div>
                  <div className="text-slate-400">
                    t ∈ [{preset.tMin}, {preset.tMax.toFixed(2)}]
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Educational Content */}
          <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-6 shadow-lg">
            <h4 className="text-slate-200 font-semibold mb-4 flex items-center gap-2">
              <Compass className="w-5 h-5 text-orange-400" />
              About Parametric Equations
            </h4>
            <div className="text-slate-300 text-sm space-y-4">
              <p>Parametric equations define curves using a parameter t, where both x and y are functions of t:</p>
              <div className="backdrop-blur-sm bg-slate-700/30 p-4 rounded-xl font-mono text-sm border border-slate-600/30">
                <div className="text-orange-300">x = f(t)</div>
                <div className="text-orange-300">y = g(t)</div>
              </div>
              <p>
                This allows you to create curves that can't be expressed as y = f(x), such as circles, spirals, and
                loops.
              </p>
              <div className="backdrop-blur-sm bg-slate-700/30 p-4 rounded-xl">
                <div className="text-slate-400 text-xs font-semibold mb-2">Pro Tips:</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-400">
                  <li>Use 't' as your parameter variable</li>
                  <li>For circles: x = r*cos(t), y = r*sin(t)</li>
                  <li>For spirals: x = t*cos(t), y = t*sin(t)</li>
                  <li>Adjust t range to control how much of the curve is drawn</li>
                  <li>Try combining trigonometric functions for interesting patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}