"use client"

import { Calculator, Target, TrendingUp, FunctionSquare } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { MathParser } from "../../lib/calculator/math-utils"
import { useState, useMemo } from "react"

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

  const compiledFunction = useMemo(() => {
    return MathParser.parseFunction(calcExpression)
  }, [calcExpression])

  const compiledDerivative = useMemo(() => {
    const derivativeExpr = MathParser.derivativeToString(calcExpression, 'x');
    return MathParser.parseFunction(derivativeExpr);
  }, [calcExpression])
  
  const symbolicResults = useMemo(() => {
      if (!calcExpression) return { derivative: "", integral: "" };
      const derivative = MathParser.derivativeToString(calcExpression, 'x');
      const integral = MathParser.symbolicIntegralToString(calcExpression, 'x');
      return { derivative, integral };
    }, [calcExpression]);

  const calcResults = useMemo(() => {
    if (!compiledFunction || !compiledDerivative) return { error: "Invalid expression for calculus." }
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
      console.error(error);
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
      console.error(error);
      return []
    }
  }, [solverExpression, equationFormat, targetValue, globalXMin, globalXMax])

  const graphHandler = (displayExpression, type, baseCompiledFunc, integrationStart) => {
    const newId = Math.max(0, ...functions.map((f) => f.id)) + 1
    const colors = ["#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"]
    let newFuncData = {
        id: newId,
        expression: displayExpression, // This is for display only
        color: colors[newId % colors.length],
        visible: true,
        type: type,
        parentId: null,
    };

    if (type === "derivative") {
      newFuncData.compiled = compiledDerivative;
      // The parsable expression is the one from the compiled derivative object
      newFuncData.originalExpression = compiledDerivative.originalExpression;
    } else if (type === "integral") {
      newFuncData.compiled = MathParser.antiderivative(baseCompiledFunc, integrationStart ?? 0);
      // For integrals, we create a parsable expression from the symbolic result
      // We remove the "+ C" for parsing, as C is handled by the antiderivative function.
      const parsableIntegral = symbolicResults.integral.replace(/\s*\+\s*C$/, '');
      newFuncData.originalExpression = parsableIntegral;
    } else { // type === "function"
      newFuncData.compiled = compiledFunction;
      newFuncData.originalExpression = calcExpression;
    }

    setFunctions((prev) => [...prev, newFuncData]);
    setActiveTab("graphing");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Calculus Analysis
        </h3>
        <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
          <Label className="text-slate-300 text-sm mb-2 block">Quick Symbols</Label>
          <div className="grid grid-cols-4 gap-1">
            {mathSymbols.map((sym) => (
              <Button
                key={sym.symbol}
                onClick={() => addSymbolToInput(sym.value, setCalcExpression)}
                className="h-8 text-xs bg-slate-600/30 hover:bg-slate-600/50 text-slate-200 border border-slate-600/50"
              >
                {sym.symbol}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Input
            value={calcExpression}
            onChange={(e) => setCalcExpression(e.target.value)}
            placeholder="f(x) = x^2"
            className="bg-slate-700/50 border-slate-600 text-slate-200 flex-1"
          />
          <Button
            onClick={() => graphHandler(calcExpression, "function", compiledFunction)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded"
          >
            + f(x)
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Label className="text-slate-200">Point x</Label>
            <Input
              type="number"
              value={calcPoint}
              onChange={(e) => setCalcPoint(Number(e.target.value))}
              className="bg-slate-700/50 border-slate-600 text-slate-200"
            />
          </div>
          <div>
            <Label className="text-slate-200">Integral a</Label>
            <Input
              type="number"
              value={integralA}
              onChange={(e) => setIntegralA(Number(e.target.value))}
              className="bg-slate-700/50 border-slate-600 text-slate-200"
            />
          </div>
          <div>
            <Label className="text-slate-200">Integral b</Label>
            <Input
              type="number"
              value={integralB}
              onChange={(e) => setIntegralB(Number(e.target.value))}
              className="bg-slate-700/50 border-slate-600 text-slate-200"
            />
          </div>
        </div>

        {calcResults.error ? (
          <div className="text-red-400 p-2 bg-red-900/30 rounded">{calcResults.error}</div>
        ) : (
          <div className="space-y-3">
            <h4 className="text-slate-200 font-medium">Numerical Results</h4>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30">
              <div className="text-slate-400 text-sm">f({calcPoint}) =</div>
              <div className="text-xl font-mono text-cyan-300">{calcResults.value}</div>
            </div>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <div className="text-slate-400 text-sm">f'({calcPoint}) =</div>
                <Button
                  onClick={() => graphHandler(`d/dx(${calcExpression})`, "derivative", compiledFunction)}
                  disabled={!compiledFunction}
                  className="bg-green-600 hover:bg-green-700 text-white text-xs h-6 px-2 py-1 rounded"
                >
                  <TrendingUp className="w-3 h-3 mr-1 inline-flex" />+ f'(x)
                </Button>
              </div>
              <div className="text-xl font-mono text-green-300">{calcResults.derivative}</div>
            </div>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <div className="text-slate-400 text-sm">
                  ∫[{integralA},{integralB}] f(x)dx =
                </div>
                <Button
                  onClick={() => graphHandler(`∫(${calcExpression})dx`, "integral", compiledFunction, integralA)}
                  disabled={!compiledFunction}
                  className="bg-purple-600 hover:bg-purple-700 text-white text-xs h-6 px-2 py-1 rounded"
                >
                  <TrendingUp className="w-3 h-3 mr-1 inline-flex" />+ ∫f(x)
                </Button>
              </div>
              <div className="text-xl font-mono text-purple-300">{calcResults.integral}</div>
            </div>
          </div>
        )}
        <div className="space-y-3 pt-4">
            <h4 className="text-slate-200 font-medium flex items-center gap-2">
                <FunctionSquare className="w-5 h-5 text-amber-400"/>
                Symbolic Results
            </h4>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30">
              <div className="text-slate-400 text-sm">d/dx f(x) =</div>
              <div className="text-lg font-mono text-green-300 break-words">{symbolicResults.derivative || "..."}</div>
            </div>
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30">
              <div className="text-slate-400 text-sm">∫f(x)dx =</div>
              <div className={`text-lg font-mono break-words ${symbolicResults.integral.includes("found") || symbolicResults.integral.includes("complex") ? "text-amber-300" : "text-purple-300"}`}>
                {symbolicResults.integral || "..."}
              </div>
            </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
          <Target className="w-5 h-5" />
          Equation Solver
        </h3>
        <div className="space-y-3">
          <Label className="text-slate-200">Equation Format</Label>
          <select
            value={equationFormat}
            onChange={(e) => setEquationFormat(e.target.value)}
            className="w-full h-10 bg-slate-700/50 border border-slate-600 text-slate-200 rounded-md px-3"
          >
            <option value="equals-zero">f(x) = 0</option>
            <option value="equals-value">f(x) = c</option>
          </select>
        </div>
        {equationFormat === "equals-value" && (
          <div className="space-y-3">
            <Label className="text-slate-200">Target Value (c)</Label>
            <Input
              type="number"
              value={targetValue}
              onChange={(e) => setTargetValue(Number(e.target.value))}
              className="bg-slate-700/50 border-slate-600 text-slate-200"
            />
          </div>
        )}
        <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
          <Label className="text-slate-300 text-sm mb-2 block">Quick Symbols</Label>
          <div className="grid grid-cols-4 gap-1">
            {mathSymbols.map((sym) => (
              <Button
                key={sym.symbol}
                onClick={() => addSymbolToInput(sym.value, setSolverExpression)}
                className="h-8 text-xs bg-slate-600/30 hover:bg-slate-600/50 text-slate-200 border border-slate-600/50"
              >
                {sym.symbol}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <Label className="text-slate-200">Equation f(x) {equationFormat === "equals-zero" ? "= 0" : "= c"}</Label>
          <Input
            value={solverExpression}
            onChange={(e) => setSolverExpression(e.target.value)}
            placeholder="e.g., x^2 - 4"
            className="bg-slate-700/50 border-slate-600 text-slate-200"
          />
          <div className="text-sm text-slate-400">
            Find solutions in range [{globalXMin.toFixed(1)}, {globalXMax.toFixed(1)}]
          </div>
        </div>
        <div className="bg-slate-700/30 p-4 rounded border border-slate-600/30">
          <h4 className="text-slate-200 font-medium mb-3">Solutions Found</h4>
          {solverResults.length > 0 ? (
            <div className="space-y-2">
              {solverResults.map((root, i) => (
                <div key={i} className="bg-slate-800/50 p-2 rounded">
                  <div className="text-slate-400 text-sm">x{i + 1} =</div>
                  <div className="text-lg font-mono text-amber-300">{root.toFixed(6)}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-slate-400 text-center py-4">No solutions found in the current range.</div>
          )}
        </div>
      </div>
    </div>
  )
}