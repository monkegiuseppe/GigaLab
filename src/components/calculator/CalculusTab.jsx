"use client"

import { Calculator, Target, TrendingUp, FunctionSquare } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { MathParser } from "../../lib/calculator/math-utils"
import { useState, useMemo } from "react"
import KatexDisplay from "./KatexDisplay" // Import the new component

export default function CalculusTab({
  setActiveTab,
  setFunctions,
  functions,
  mathSymbols,
  addSymbolToInput,
  globalXMin,
  globalXMax,
}) {
  const [calcExpression, setCalcExpression] = useState("x^3 + 2*x^2 - 5*x + 1")
  const [calcPoint, setCalcPoint] = useState(2)
  const [integralA, setIntegralA] = useState(0)
  const [integralB, setIntegralB] = useState(5)
  const [solverExpression, setSolverExpression] = useState("x^2 - 4")
  const [equationFormat, setEquationFormat] = useState("equals-zero")
  const [targetValue, setTargetValue] = useState(0)

  const symbolicResults = useMemo(() => {
    if (!calcExpression) return { derivative: { latex: "" }, integral: { latex: "" } };
    const derivative = MathParser.derivativeToLatex(calcExpression, 'x');
    const integral = MathParser.symbolicIntegralToLatex(calcExpression, 'x');
    return { derivative, integral };
  }, [calcExpression]);

  const compiledFunction = useMemo(() => {
    return MathParser.parseFunction(calcExpression)
  }, [calcExpression])

  const compiledDerivative = useMemo(() => {
    return MathParser.parseFunction(symbolicResults.derivative.simplified);
  }, [symbolicResults.derivative.simplified])

  const calcResults = useMemo(() => {
    if (!compiledFunction || !compiledDerivative) return { error: "Invalid expression." }
    try {
      const scope = { x: calcPoint };
      const value = compiledFunction.evaluate(scope)
      const derivative = compiledDerivative.evaluate(scope)
      const integral = MathParser.integrate(compiledFunction, integralA, integralB, 'x')
      return {
        value: isFinite(value) ? value.toFixed(4) : "undefined",
        derivative: isFinite(derivative) ? derivative.toFixed(4) : "undefined",
        integral: isFinite(integral) ? integral.toFixed(4) : "undefined",
      }
    } catch (error) {
      return { error: "Error in numerical calculation." }
    }
  }, [compiledFunction, compiledDerivative, calcPoint, integralA, integralB])

  const solverResults = useMemo(() => {
    try {
      const exprToSolve = equationFormat === "equals-value" 
        ? `(${solverExpression}) - (${targetValue})` 
        : solverExpression;
      
      const roots = MathParser.findRoots(exprToSolve, globalXMin, globalXMax);
      return roots.filter((r) => isFinite(r));
    } catch (error) {
      return []
    }
  }, [solverExpression, equationFormat, targetValue, globalXMin, globalXMax])
  
  const graphHandler = (displayExpression, type, baseCompiledFunc, integrationStart) => {
    const newId = Math.max(0, ...functions.map((f) => f.id)) + 1;
    const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];
    let newFuncData = {
        id: newId,
        expression: displayExpression,
        color: colors[newId % colors.length],
        visible: true,
        type: type,
        parentId: null,
    };

    if (type === "derivative") {
      newFuncData.compiled = compiledDerivative;
      newFuncData.originalExpression = symbolicResults.derivative.simplified;
    } else if (type === "integral") {
      newFuncData.compiled = MathParser.antiderivative(baseCompiledFunc, integrationStart ?? 0);
      newFuncData.originalExpression = symbolicResults.integral.simplified;
    } else {
      newFuncData.compiled = compiledFunction;
      newFuncData.originalExpression = calcExpression;
    }
    
    // Ensure we don't add functions with invalid expressions to the graph
    if (!newFuncData.originalExpression || newFuncData.originalExpression.includes("Error")) {
        console.error("Attempted to add an invalid function to the graph.");
        return;
    }

    setFunctions((prev) => [...prev, newFuncData]);
    setActiveTab("graphing");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Calculus Analysis
        </h3>
        {/* Input section remains the same */}
        <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
          <Label className="text-slate-300 text-sm mb-2 block">Quick Symbols</Label>
          <div className="grid grid-cols-4 gap-1">
            {mathSymbols.map((sym) => (
              <Button key={sym.symbol} onClick={() => addSymbolToInput(sym.value, setCalcExpression)} className="h-8 text-xs bg-slate-600/30 hover:bg-slate-600/50 text-slate-200 border border-slate-600/50">
                {sym.symbol}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Input value={calcExpression} onChange={(e) => setCalcExpression(e.target.value)} placeholder="f(x) = x^2" className="bg-slate-700/50 border-slate-600 text-slate-200 flex-1"/>
          <Button onClick={() => graphHandler(calcExpression, "function", compiledFunction)} className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded">
            + f(x)
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div><Label className="text-slate-200">Point x</Label><Input type="number" value={calcPoint} onChange={(e) => setCalcPoint(Number(e.target.value))} className="bg-slate-700/50 border-slate-600 text-slate-200"/></div>
          <div><Label className="text-slate-200">Integral a</Label><Input type="number" value={integralA} onChange={(e) => setIntegralA(Number(e.target.value))} className="bg-slate-700/50 border-slate-600 text-slate-200"/></div>
          <div><Label className="text-slate-200">Integral b</Label><Input type="number" value={integralB} onChange={(e) => setIntegralB(Number(e.target.value))} className="bg-slate-700/50 border-slate-600 text-slate-200"/></div>
        </div>

        {/* Numerical Results Section */}
        {calcResults.error ? (<div className="text-red-400 p-2 bg-red-900/30 rounded">{calcResults.error}</div>) : (
          <div className="space-y-3">
            <h4 className="text-slate-200 font-medium">Numerical Results</h4>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30"><div className="text-slate-400 text-sm">f({calcPoint}) =</div><div className="text-xl font-mono text-cyan-300">{calcResults.value}</div></div>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30"><div className="flex items-center justify-between mb-2"><div className="text-slate-400 text-sm">f'({calcPoint}) =</div><Button onClick={() => graphHandler(`d/dx(${calcExpression})`, "derivative", compiledFunction)} disabled={!compiledFunction} className="bg-green-600 hover:bg-green-700 text-white text-xs h-6 px-2 py-1 rounded"><TrendingUp className="w-3 h-3 mr-1 inline-flex" />+ f'(x)</Button></div><div className="text-xl font-mono text-green-300">{calcResults.derivative}</div></div>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30"><div className="flex items-center justify-between mb-2"><div className="text-slate-400 text-sm">∫[{integralA},{integralB}] f(x)dx =</div><Button onClick={() => graphHandler(`∫(${calcExpression})dx`, "integral", compiledFunction, integralA)} disabled={!compiledFunction} className="bg-purple-600 hover:bg-purple-700 text-white text-xs h-6 px-2 py-1 rounded"><TrendingUp className="w-3 h-3 mr-1 inline-flex" />+ ∫f(x)</Button></div><div className="text-xl font-mono text-purple-300">{calcResults.integral}</div></div>
          </div>
        )}
        
        <div className="space-y-3 pt-4">
            <h4 className="text-slate-200 font-medium flex items-center gap-2">
                <FunctionSquare className="w-5 h-5 text-amber-400"/>
                Symbolic Results
            </h4>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30 min-h-[72px]">
              <div className="text-slate-400 text-sm">
                {/* Use KatexDisplay for the label */}
                <KatexDisplay tex="\\frac{d}{dx}f(x) =" />
              </div>
              <div className="text-lg text-green-300 break-words">
                <KatexDisplay tex={symbolicResults.derivative.latex} />
              </div>
            </div>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30 min-h-[72px]">
              <div className="text-slate-400 text-sm">
                 {/* Use KatexDisplay for the label */}
                <KatexDisplay tex="\\int f(x)dx =" />
              </div>
              <div className={`text-lg break-words ${symbolicResults.integral.latex.includes("text") ? "text-amber-300" : "text-purple-300"}`}>
                <KatexDisplay tex={symbolicResults.integral.latex} />
              </div>
            </div>
        </div>
      </div>

      {/* Equation Solver Column remains the same */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2"><Target className="w-5 h-5" />Equation Solver</h3>
        <div className="space-y-3"><Label className="text-slate-200">Equation Format</Label><select value={equationFormat} onChange={(e) => setEquationFormat(e.target.value)} className="w-full h-10 bg-slate-700/50 border border-slate-600 text-slate-200 rounded-md px-3"><option value="equals-zero">f(x) = 0</option><option value="equals-value">f(x) = c</option></select></div>
        {equationFormat === "equals-value" && (<div className="space-y-3"><Label className="text-slate-200">Target Value (c)</Label><Input type="number" value={targetValue} onChange={(e) => setTargetValue(Number(e.target.value))} className="bg-slate-700/50 border-slate-600 text-slate-200"/></div>)}
        <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30"><Label className="text-slate-300 text-sm mb-2 block">Quick Symbols</Label><div className="grid grid-cols-4 gap-1">{mathSymbols.map((sym) => (<Button key={sym.symbol} onClick={() => addSymbolToInput(sym.value, setSolverExpression)} className="h-8 text-xs bg-slate-600/30 hover:bg-slate-600/50 text-slate-200 border border-slate-600/50">{sym.symbol}</Button>))}</div></div>
        <div className="space-y-3"><Label className="text-slate-200">Equation f(x) {equationFormat === "equals-zero" ? "= 0" : "= c"}</Label><Input value={solverExpression} onChange={(e) => setSolverExpression(e.target.value)} placeholder="e.g., x^2 - 4" className="bg-slate-700/50 border-slate-600 text-slate-200"/><div className="text-sm text-slate-400">Find solutions in range [{globalXMin.toFixed(1)}, {globalXMax.toFixed(1)}]</div></div>
        <div className="bg-slate-700/30 p-4 rounded border border-slate-600/30"><h4 className="text-slate-200 font-medium mb-3">Solutions Found</h4>{solverResults.length > 0 ? (<div className="space-y-2">{solverResults.map((root, i) => (<div key={i} className="bg-slate-800/50 p-2 rounded"><div className="text-slate-400 text-sm">x{i + 1} =</div><div className="text-lg font-mono text-amber-300">{root.toFixed(6)}</div></div>))}</div>) : (<div className="text-slate-400 text-center py-4">No solutions found in the current range.</div>)}</div>
      </div>
    </div>
  )
}