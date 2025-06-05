
import React from "react";
import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { Eye, EyeOff, Plus, X } from "lucide-react";

// USER'S COMPONENTS
import { Button } from "../ui/button"; // Adjust path
import { Slider } from "../ui/slider"; // Adjust path

// Shadcn/ui components - assuming these are available
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { MathParser, derivativeCache, throttle } from "../../lib/calculator/math-utils";

const SVG_WIDTH = 400;
const SVG_HEIGHT = 300;

/**
 * @param {object} props
 * @param {any[]} props.functions
 * @param {React.Dispatch<React.SetStateAction<any[]>>} props.setFunctions
 * @param {number} props.xMin
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setXMin
 * @param {number} props.xMax
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setXMax
 * @param {{ a: number; b: number; functionId: number }} props.integralBounds
 * @param {React.Dispatch<React.SetStateAction<{ a: number; b: number; functionId: number }>>} props.setIntegralBounds
 * @param {boolean} props.showIntegralArea
 * @param {React.Dispatch<React.SetStateAction<boolean>>} props.setShowIntegralArea
 * @param {{ symbol: string; value: string }[]} props.mathSymbols
 * @param {(symbol: string, targetSetter: React.Dispatch<React.SetStateAction<string>>) => void} props.addSymbolToInput
 * @param {string} props.newFunctionInput
 * @param {React.Dispatch<React.SetStateAction<string>>} props.setNewFunctionInput
 * @param {() => void} props.onAddFunction
 * @param {(parentId: number) => void} props.onAddDerivative
 * @param {(parentId: number) => void} props.onAddIntegral
 * @param {(id: number, updates: Partial<any>) => void} props.onUpdateFunction
 * @param {(id: number) => void} props.onRemoveFunction
 */
export default function GraphingTab({
  functions,
  setFunctions,
  xMin,
  setXMin,
  xMax,
  setXMax,
  integralBounds,
  setIntegralBounds,
  showIntegralArea,
  setShowIntegralArea,
  mathSymbols,
  addSymbolToInput,
  newFunctionInput,
  setNewFunctionInput,
  onAddFunction,
  onAddDerivative,
  onAddIntegral,
  onUpdateFunction,
  onRemoveFunction,
}) {
  const [hoverPoint, setHoverPoint] = useState(null);
  const [autoFit, setAutoFit] = useState(true);
  const [xSliderValue, setXSliderValue] = useState([1]); // Slider expects array
  const [ySliderValue, setYSliderValue] = useState([1]); // Slider expects array

  const svgRef = useRef(null);
  const lastAutoFitRangesRef = useRef({ xSpan: 20, ySpan: 20, xCenter: 0, yCenter: 0 });
  const boundsRef = useRef({ minX: -10, maxX: 10, minY: -10, maxY: 10 });

  const calculateDerivativeWithCache = useCallback((f, x) => {
    const cacheKey = `${f.originalExpression}-${x.toFixed(4)}`;
    if (derivativeCache.has(cacheKey)) return derivativeCache.get(cacheKey);
    const result = MathParser.derivative(f, x);
    derivativeCache.set(cacheKey, result);
    return result;
  }, []);

  const memoizedPlotData = useMemo(() => {
    const plotData = [];
    const step = (xMax - xMin) / 200;
    functions.forEach((func) => {
      if (!func.visible || !func.parsedFunc) return; // Ensure parsedFunc exists
      const functionPoints = [];
      for (let xVal = xMin; xVal <= xMax; xVal += step) {
        const yVal = func.parsedFunc(xVal);
        if (isFinite(yVal)) functionPoints.push({ x: xVal, y: yVal });
      }
      const integralAreaPoints = [];
      if (
        showIntegralArea &&
        func.id === integralBounds.functionId &&
        isFinite(integralBounds.a) &&
        isFinite(integralBounds.b) &&
        integralBounds.a < integralBounds.b
      ) {
        const integralStep = (integralBounds.b - integralBounds.a) / 50;
        for (let xVal = integralBounds.a; xVal <= integralBounds.b; xVal += integralStep) {
          const yVal = func.parsedFunc(xVal);
          if (isFinite(yVal)) integralAreaPoints.push({ x: xVal, y: yVal });
        }
      }
      plotData.push({ ...func, points: functionPoints, integralPoints: integralAreaPoints });
    });
    return plotData;
  }, [functions, xMin, xMax, integralBounds, showIntegralArea]);

  const currentBounds = useMemo(() => {
    let currentXMin = xMin,
      currentXMax = xMax,
      yMinToUse,
      yMaxToUse;
    if (autoFit) {
      let dataYMin = Number.POSITIVE_INFINITY,
        dataYMax = Number.NEGATIVE_INFINITY;
      memoizedPlotData.forEach((fd) =>
        fd.points.forEach((p) => {
          if (isFinite(p.y)) {
            dataYMin = Math.min(dataYMin, p.y);
            dataYMax = Math.max(dataYMax, p.y);
          }
        }),
      );
      if (dataYMin === Number.POSITIVE_INFINITY) {
        dataYMin = -10;
        dataYMax = 10;
      }
      const yPadding = (dataYMax - dataYMin) * 0.1 || 1;
      yMinToUse = dataYMin - yPadding;
      yMaxToUse = dataYMax + yPadding;
      lastAutoFitRangesRef.current = {
        xSpan: currentXMax - currentXMin,
        xCenter: (currentXMax + currentXMin) / 2,
        ySpan: yMaxToUse - yMinToUse,
        yCenter: (yMaxToUse + yMinToUse) / 2,
      };
    } else {
      const { xCenter, yCenter, xSpan, ySpan } = lastAutoFitRangesRef.current;
      const currentXSpan = xSpan / xSliderValue[0];
      currentXMin = xCenter - currentXSpan / 2;
      currentXMax = xCenter + currentXSpan / 2;
      const currentYSpan = ySpan / ySliderValue[0];
      yMinToUse = yCenter - currentYSpan / 2;
      yMaxToUse = yCenter + currentYSpan / 2;
    }
    boundsRef.current = { minX: currentXMin, maxX: currentXMax, minY: yMinToUse, maxY: yMaxToUse };
    return boundsRef.current;
  }, [memoizedPlotData, xMin, xMax, autoFit, xSliderValue, ySliderValue]);

  useEffect(() => {
    // Update global xMin/xMax when slider-derived bounds change
    if (!autoFit) {
      const { xCenter, xSpan } = lastAutoFitRangesRef.current;
      const currentXSpan = xSpan / xSliderValue[0];
      const newXMin = xCenter - currentXSpan / 2;
      const newXMax = xCenter + currentXSpan / 2;
      if (xMin !== newXMin) setXMin(newXMin);
      if (xMax !== newXMax) setXMax(newXMax);
    }
  }, [xSliderValue, autoFit, xMin, xMax, setXMin, setXMax]);

  const toSVGCoords = useCallback(
    (dataX, dataY, bounds = currentBounds) => {
      const svgX = ((dataX - bounds.minX) / (bounds.maxX - bounds.minX)) * SVG_WIDTH;
      const svgY = SVG_HEIGHT - ((dataY - bounds.minY) / (bounds.maxY - bounds.minY)) * SVG_HEIGHT;
      return { x: svgX, y: svgY };
    },
    [currentBounds],
  );

  const fromSVGCoords = useCallback(
    (svgX, svgY, bounds = currentBounds) => {
      const dataX = bounds.minX + (svgX / SVG_WIDTH) * (bounds.maxX - bounds.minX);
      const dataY = bounds.minY + ((SVG_HEIGHT - svgY) / SVG_HEIGHT) * (bounds.maxY - bounds.minY);
      return { x: dataX, y: dataY };
    },
    [currentBounds],
  );

  const handleMouseMove = useCallback(
    (event) => {
      if (!svgRef.current) return;
      const svgRect = svgRef.current.getBoundingClientRect();
      const cursorSvgX = event.clientX - svgRect.left;
      const cursorSvgY = event.clientY - svgRect.top;
      const cursorDataX = fromSVGCoords(cursorSvgX, cursorSvgY, currentBounds).x;
      let closestFuncData = null;
      let minYDist = Number.POSITIVE_INFINITY;

      memoizedPlotData.forEach((funcData) => {
        if (!funcData.visible || !funcData.parsedFunc) return;
        const yAtCursor = funcData.parsedFunc(cursorDataX);
        if (!isFinite(yAtCursor)) return;
        const pointSvgY = toSVGCoords(cursorDataX, yAtCursor, currentBounds).y;
        const dist = Math.abs(pointSvgY - cursorSvgY);
        if (dist < minYDist && dist < 20) {
          // 20px threshold
          minYDist = dist;
          closestFuncData = funcData;
        }
      });

      if (closestFuncData?.parsedFunc) {
        const dataY = closestFuncData.parsedFunc(cursorDataX);
        const slope = calculateDerivativeWithCache(closestFuncData.parsedFunc, cursorDataX);
        const markerPos = toSVGCoords(cursorDataX, dataY, currentBounds);
        setHoverPoint({
          dataX: cursorDataX,
          dataY: dataY,
          slope: isFinite(slope) ? slope : null,
          color: closestFuncData.color,
          markerSvgX: markerPos.x,
          markerSvgY: markerPos.y,
          tooltipSvgX: cursorSvgX,
          tooltipSvgY: cursorSvgY,
        });
      } else {
        setHoverPoint(null);
      }
    },
    [fromSVGCoords, toSVGCoords, currentBounds, memoizedPlotData, calculateDerivativeWithCache],
  );

  const throttledMouseMove = useMemo(() => throttle(handleMouseMove, 50), [handleMouseMove]);
  const handleMouseLeave = useCallback(() => setHoverPoint(null), []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-200">Functions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-slate-200 font-medium">Integral Area</h4>
            <div className="flex items-center gap-2">
              <Label className="text-slate-300 text-sm">Show</Label>
              <Button // USER'S BUTTON
                onClick={() => setShowIntegralArea(!showIntegralArea)}
                className={`px-3 py-1 text-xs rounded ${showIntegralArea ? "bg-purple-600 text-white" : "border border-slate-600 text-slate-300"}`}
              >
                {showIntegralArea ? "On" : "Off"}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <Label className="text-slate-300 text-sm">a</Label>
              <Input
                type="number"
                value={integralBounds.a}
                onChange={(e) => setIntegralBounds({ ...integralBounds, a: Number(e.target.value) || 0 })}
                className="bg-slate-700/50 border-slate-600 text-slate-200 h-8"
              />
            </div>
            <div>
              <Label className="text-slate-300 text-sm">b</Label>
              <Input
                type="number"
                value={integralBounds.b}
                onChange={(e) => setIntegralBounds({ ...integralBounds, b: Number(e.target.value) || 1 })}
                className="bg-slate-700/50 border-slate-600 text-slate-200 h-8"
              />
            </div>
            <div>
              <Label className="text-slate-300 text-sm">Function</Label>
              <select
                value={integralBounds.functionId}
                onChange={(e) => setIntegralBounds({ ...integralBounds, functionId: Number(e.target.value) })}
                className="w-full h-8 bg-slate-700/50 border border-slate-600 text-slate-200 rounded-md px-2 text-sm"
              >
                {functions
                  .filter((f) => f.type === "function")
                  .map((f) => (
                    <option key={f.id} value={f.id}>
                      f{f.id}: {f.expression.substring(0, 10)}
                      {f.expression.length > 10 ? "..." : ""}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
          <Label className="text-slate-300 text-sm mb-2 block">Quick Symbols</Label>
          <div className="grid grid-cols-4 gap-1">
            {mathSymbols.map((sym) => (
              <Button
                key={sym.symbol}
                onClick={() => addSymbolToInput(sym.value, setNewFunctionInput)}
                className="h-8 text-xs bg-slate-600/30 hover:bg-slate-600/50 text-slate-200 border border-slate-600/50"
              >
                {sym.symbol}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="e.g., x^2, sin(x)"
            value={newFunctionInput}
            onChange={(e) => setNewFunctionInput(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-slate-200"
            onKeyPress={(e) => e.key === "Enter" && onAddFunction()}
          />
          <Button
            onClick={onAddFunction}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded shadow-lg"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {functions.map((func) => (
            <div key={func.id} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: func.color }} />
                <Input
                  value={func.expression}
                  onChange={(e) => onUpdateFunction(func.id, { expression: e.target.value })}
                  className="bg-slate-800/50 border-slate-600 text-slate-200 text-sm h-8"
                  disabled={func.type !== "function"}
                />
                <Button
                  onClick={() => onUpdateFunction(func.id, { visible: !func.visible })}
                  className="text-slate-400 hover:text-slate-200 h-8 w-8 p-0"
                >
                  {func.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={() => onRemoveFunction(func.id)}
                  className="text-red-400 hover:text-red-300 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              {func.type === "function" && (
                <div className="flex gap-2 text-sm">
                  <Button
                    onClick={() => onAddDerivative(func.id)}
                    className="bg-green-600 hover:bg-green-700 text-white text-xs h-6 px-2 py-1 rounded"
                  >
                    + f'(x)
                  </Button>
                  <Button
                    onClick={() => onAddIntegral(func.id)}
                    className="bg-purple-600 hover:bg-purple-700 text-white text-xs h-6 px-2 py-1 rounded"
                  >
                    + ∫f(x)
                  </Button>
                </div>
              )}
              {func.type !== "function" && (
                <div className="text-xs text-slate-400">
                  {func.type === "derivative" ? "Derivative" : "Integral"} of f{func.parentId}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 relative">
          <div className="absolute top-4 right-4 z-10 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label className="text-slate-300 text-xs">X Zoom</Label>
                <Slider
                  value={xSliderValue}
                  onValueChange={(v) => {
                    setAutoFit(false);
                    setXSliderValue(v);
                  }}
                  max={10}
                  min={0.1}
                  step={0.1}
                  className="w-20"
                />
                <span className="text-xs text-slate-400 w-8">{xSliderValue[0].toFixed(1)}x</span>
              </div>
              <div className="flex items-center gap-2">
                <Label className="text-slate-300 text-xs">Y Zoom</Label>
                <Slider
                  value={ySliderValue}
                  onValueChange={(v) => {
                    setAutoFit(false);
                    setYSliderValue(v);
                  }}
                  max={10}
                  min={0.1}
                  step={0.1}
                  className="w-20"
                />
                <span className="text-xs text-slate-400 w-8">{ySliderValue[0].toFixed(1)}x</span>
              </div>
              <Button
                onClick={() => {
                  setAutoFit(true);
                  setXSliderValue([1]);
                  setYSliderValue([1]);
                  setXMin(-10);
                  setXMax(10);
                }}
                className="w-full bg-slate-600 hover:bg-slate-700 text-white text-xs h-6 px-2 py-1 rounded"
              >
                Auto Fit
              </Button>
            </div>
          </div>
          <div className="w-full h-96 relative">
            <svg
              ref={svgRef}
              className="w-full h-full absolute inset-0 touch-none"
              viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
              onMouseMove={throttledMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <defs>
                <pattern id="grid" width="20" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 15" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <line
                x1="0"
                y1={toSVGCoords(0, 0).y}
                x2={SVG_WIDTH}
                y2={toSVGCoords(0, 0).y}
                stroke="rgba(148,163,184,0.4)"
                strokeWidth="1"
              />
              <line
                x1={toSVGCoords(0, 0).x}
                y1="0"
                x2={toSVGCoords(0, 0).x}
                y2={SVG_HEIGHT}
                stroke="rgba(148,163,184,0.4)"
                strokeWidth="1"
              />
              {memoizedPlotData.map((fd) => (
                <g key={fd.id}>
                  {fd.integralPoints.length > 0 && (
                    <path
                      d={`M ${fd.integralPoints.map((p) => `${toSVGCoords(p.x, p.y).x},${toSVGCoords(p.x, p.y).y}`).join(" L ")} L ${toSVGCoords(integralBounds.b, 0).x},${toSVGCoords(integralBounds.b, 0).y} L ${toSVGCoords(integralBounds.a, 0).x},${toSVGCoords(integralBounds.a, 0).y} Z`}
                      fill={fd.color}
                      fillOpacity="0.3"
                    />
                  )}
                  {fd.points.length > 1 && (
                    <path
                      d={`M ${fd.points.map((p) => `${toSVGCoords(p.x, p.y).x},${toSVGCoords(p.x, p.y).y}`).join(" L ")}`}
                      fill="none"
                      stroke={fd.color}
                      strokeWidth={fd.type === "derivative" ? "1.5" : "2"}
                      strokeDasharray={fd.type === "derivative" ? "4,4" : fd.type === "integral" ? "8,4" : "none"}
                      opacity={fd.type === "function" ? 1 : 0.8}
                    />
                  )}
                </g>
              ))}
              {hoverPoint && (
                <>
                  <circle
                    cx={hoverPoint.markerSvgX}
                    cy={hoverPoint.markerSvgY}
                    r="4"
                    fill={hoverPoint.color}
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <g transform={`translate(${hoverPoint.tooltipSvgX + 10}, ${hoverPoint.tooltipSvgY - 45})`}>
                    <rect
                      width="125"
                      height="40"
                      rx="4"
                      fill="rgba(15,23,42,0.9)"
                      stroke={hoverPoint.color}
                      strokeWidth="1"
                    />
                    <text x="5" y="15" fill="#fff" fontSize="10" fontFamily="monospace">
                      x: {hoverPoint.dataX.toFixed(3)}
                    </text>
                    <text x="5" y="30" fill="#fff" fontSize="10" fontFamily="monospace">
                      y: {hoverPoint.dataY.toFixed(3)}
                    </text>
                    {hoverPoint.slope !== null && (
                      <text x="65" y="30" fill={hoverPoint.color} fontSize="10" fontFamily="monospace">
                        m: {hoverPoint.slope.toFixed(2)}
                      </text>
                    )}
                  </g>
                </>
              )}
              <text
                x={SVG_WIDTH - 10}
                y={toSVGCoords(0, 0).y - 5}
                textAnchor="end"
                fill="rgba(148,163,184,0.6)"
                fontSize="12"
              >
                x
              </text>
              <text x={toSVGCoords(0, 0).x + 5} y="15" fill="rgba(148,163,184,0.6)" fontSize="12">
                y
              </text>
              <text x="10" y={SVG_HEIGHT - 10} fill="rgba(148,163,184,0.5)" fontSize="10">
                ({currentBounds.minX.toFixed(1)}, {currentBounds.minY.toFixed(1)})
              </text>
              <text x={SVG_WIDTH - 10} y="20" textAnchor="end" fill="rgba(148,163,184,0.5)" fontSize="10">
                ({currentBounds.maxX.toFixed(1)}, {currentBounds.maxY.toFixed(1)})
              </text>
            </svg>
          </div>
        </div>
        <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
          <h4 className="text-slate-200 font-medium mb-3">Results</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {functions
              .filter((f) => f.id === integralBounds.functionId && f.parsedFunc)
              .map((func) => {
                const integralVal = MathParser.integrate(func.parsedFunc, integralBounds.a, integralBounds.b);
                return (
                  <div key={func.id} className="text-slate-300">
                    <div className="text-slate-400">
                      ∫ {func.expression} dx from {integralBounds.a} to {integralBounds.b}
                    </div>
                    <div className="text-lg font-mono text-cyan-300">
                      {isFinite(integralVal) ? integralVal.toFixed(4) : "undefined"}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
