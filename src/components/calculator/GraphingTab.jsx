// GraphingTab.jsx

"use client"
import { useCallback, useMemo, useRef, useState, useEffect } from "react"
import { Eye, EyeOff, Plus, X } from "lucide-react"

// USER'S COMPONENTS
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { MathParser, derivativeCache, throttle } from "../../lib/calculator/math-utils"

const SVG_WIDTH = 400
const SVG_HEIGHT = 300

export default function GraphingTab({
  functions,
  setFunctions,
  xMin,
  setXMin,
  xMax,
  setXMax,
  yMin,
  setYMin,
  yMax,
  setYMax,
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
  const [hoverPoint, setHoverPoint] = useState(null)
  const [autoFit, setAutoFit] = useState(true)
  const [isDragging, setIsDragging] = useState(false)

  const svgRef = useRef(null)
  const dragStartRef = useRef({ svgX: 0, svgY: 0, minX: 0, maxX: 0, minY: 0, maxY: 0 })
  const currentBounds = useMemo(() => ({ minX: xMin, maxX: xMax, minY: yMin, maxY: yMax }), [xMin, xMax, yMin, yMax])

  const calculateDerivativeWithCache = useCallback((f, x) => {
    const cacheKey = `${f.originalExpression}-${x.toFixed(4)}`
    if (derivativeCache.has(cacheKey)) return derivativeCache.get(cacheKey)
    const result = MathParser.derivative(f, x)
    derivativeCache.set(cacheKey, result)
    return result
  }, [])

  const memoizedPlotData = useMemo(() => {
    const plotData = []
    const visibleFunctions = functions.filter((f) => f.visible)

    if (visibleFunctions.length === 0) return []

    visibleFunctions.forEach((func) => {
      if (func.type === "parametric") {
        if (!func.parsedXFunc || !func.parsedYFunc) return

        const functionPoints = []
        const numPoints = 200
        const tStep = (func.tMax - func.tMin) / numPoints

        for (let i = 0; i <= numPoints; i++) {
          const t = func.tMin + i * tStep
          const x = func.parsedXFunc(t)
          const y = func.parsedYFunc(t)
          if (isFinite(x) && isFinite(y)) {
            functionPoints.push({ x, y })
          }
        }
        plotData.push({ ...func, points: functionPoints, integralPoints: [] })
      } else {
        if (!func.parsedFunc) return

        const functionPoints = []
        const step = (xMax - xMin) / 400 // Increased resolution
        for (let xVal = xMin; xVal <= xMax; xVal += step) {
          const yVal = func.parsedFunc(xVal)
          if (isFinite(yVal)) functionPoints.push({ x: xVal, y: yVal })
        }

        const integralAreaPoints = []
        if (
          showIntegralArea &&
          func.id === integralBounds.functionId &&
          isFinite(integralBounds.a) &&
          isFinite(integralBounds.b) &&
          integralBounds.a < integralBounds.b
        ) {
          const integralStep = (integralBounds.b - integralBounds.a) / 100
          for (let xVal = integralBounds.a; xVal <= integralBounds.b; xVal += integralStep) {
            const yVal = func.parsedFunc(xVal)
            if (isFinite(yVal)) integralAreaPoints.push({ x: xVal, y: yVal })
          }
        }
        plotData.push({ ...func, points: functionPoints, integralPoints: integralAreaPoints })
      }
    })

    return plotData
  }, [functions, xMin, xMax, integralBounds, showIntegralArea])

  useEffect(() => {
    if (autoFit) {
      let dataYMin = Number.POSITIVE_INFINITY,
        dataYMax = Number.NEGATIVE_INFINITY
      let dataXMin = Number.POSITIVE_INFINITY,
        dataXMax = Number.NEGATIVE_INFINITY

      memoizedPlotData.forEach((fd) =>
        fd.points.forEach((p) => {
          if (isFinite(p.y) && isFinite(p.x)) {
            dataYMin = Math.min(dataYMin, p.y)
            dataYMax = Math.max(dataYMax, p.y)
            dataXMin = Math.min(dataXMin, p.x)
            dataXMax = Math.max(dataXMax, p.x)
          }
        }),
      )

      let hasParametric = functions.some((f) => f.visible && f.type === "parametric")
      let hasPlottableData = dataXMin !== Number.POSITIVE_INFINITY

      if (hasPlottableData) {
        if (hasParametric) {
          const xPadding = (dataXMax - dataXMin) * 0.1 || 1
          setXMin(dataXMin - xPadding)
          setXMax(dataXMax + xPadding)
        } else {
          // Keep user-defined x-range for standard functions
          // unless it was reset
          if (xMin === -10 && xMax === 10) {
             const xPadding = (dataXMax - dataXMin) * 0.1 || 1
             if (dataXMin !== Number.POSITIVE_INFINITY) {
                setXMin(dataXMin - xPadding);
                setXMax(dataXMax + xPadding);
             }
          }
        }

        const yPadding = (dataYMax - dataYMin) * 0.1 || 1
        setYMin(dataYMin - yPadding)
        setYMax(dataYMax + yPadding)
      } else {
        // No data, reset to default view
        setXMin(-10)
        setXMax(10)
        setYMin(-10)
        setYMax(10)
      }
    }
  }, [autoFit, memoizedPlotData, functions, setXMin, setXMax, setYMin, setYMax, xMin, xMax])


  const toSVGCoords = useCallback(
    (dataX, dataY) => {
      const svgX = ((dataX - currentBounds.minX) / (currentBounds.maxX - currentBounds.minX)) * SVG_WIDTH
      const svgY = SVG_HEIGHT - ((dataY - currentBounds.minY) / (currentBounds.maxY - currentBounds.minY)) * SVG_HEIGHT
      return { x: svgX, y: svgY }
    },
    [currentBounds],
  )

  const fromSVGCoords = useCallback(
    (svgX, svgY, bounds = currentBounds) => {
      const dataX = bounds.minX + (svgX / SVG_WIDTH) * (bounds.maxX - bounds.minX)
      const dataY = bounds.minY + ((SVG_HEIGHT - svgY) / SVG_HEIGHT) * (bounds.maxY - bounds.minY)
      return { x: dataX, y: dataY }
    },
    [currentBounds],
  )

  const getSVGPoint = useCallback((event) => {
    if (!svgRef.current) return null
    const pt = svgRef.current.createSVGPoint()
    pt.x = event.clientX
    pt.y = event.clientY
    const ctm = svgRef.current.getScreenCTM()
    if (!ctm) return null
    return pt.matrixTransform(ctm.inverse())
  }, [])

  const handleMouseDown = useCallback(
    (event) => {
      event.preventDefault()
      const point = getSVGPoint(event)
      if (!point) return

      setAutoFit(false)
      setIsDragging(true)
      dragStartRef.current = {
        svgX: point.x,
        svgY: point.y,
        minX: xMin,
        maxX: xMax,
        minY: yMin,
        maxY: yMax,
      }
    },
    [getSVGPoint, xMin, xMax, yMin, yMax],
  )

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault()
      const point = getSVGPoint(event)
      if (!point) return

      setAutoFit(false)
      const zoomFactor = event.deltaY < 0 ? 1.15 : 1 / 1.15
      const mouseDataCoords = fromSVGCoords(point.x, point.y)

      setXMin(mouseDataCoords.x - (mouseDataCoords.x - xMin) / zoomFactor)
      setXMax(mouseDataCoords.x + (xMax - mouseDataCoords.x) / zoomFactor)
      setYMin(mouseDataCoords.y - (mouseDataCoords.y - yMin) / zoomFactor)
      setYMax(mouseDataCoords.y + (yMax - mouseDataCoords.y) / zoomFactor)
    },
    [getSVGPoint, fromSVGCoords, xMin, xMax, yMin, yMax, setXMin, setXMax, setYMin, setYMax],
  )

  useEffect(() => {
    const handleDrag = (event) => {
      if (!isDragging) return
      event.preventDefault()
      const point = getSVGPoint(event)
      if (!point) return

      const start = dragStartRef.current
      const startPointData = fromSVGCoords(start.svgX, start.svgY, start)
      const currentPointData = fromSVGCoords(point.x, point.y, start)

      const deltaX = currentPointData.x - startPointData.x
      const deltaY = currentPointData.y - startPointData.y

      setXMin(start.minX - deltaX)
      setXMax(start.maxX - deltaX)
      setYMin(start.minY - deltaY)
      setYMax(start.maxY - deltaY)
    }

    const handleMouseUp = () => setIsDragging(false)

    window.addEventListener("mousemove", handleDrag)
    window.addEventListener("mouseup", handleMouseUp)
    return () => {
      window.removeEventListener("mousemove", handleDrag)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, getSVGPoint, fromSVGCoords, setXMin, setXMax, setYMin, setYMax])

  const handleGraphHover = useCallback(
    (event) => {
      if (isDragging || !svgRef.current) return

      const point = getSVGPoint(event)
      if (!point) {
        setHoverPoint(null)
        return
      }

      const cursorSvgX = point.x
      const cursorSvgY = point.y
      const cursorDataX = fromSVGCoords(cursorSvgX, cursorSvgY).x

      let closestFuncData = null
      let minYDist = Number.POSITIVE_INFINITY

      memoizedPlotData.forEach((funcData) => {
        if (funcData.type === "parametric") {
          let minDist = Number.POSITIVE_INFINITY
          let closestPoint = null
          funcData.points.forEach((p) => {
            const pointSvg = toSVGCoords(p.x, p.y)
            const dist = Math.sqrt(Math.pow(pointSvg.x - cursorSvgX, 2) + Math.pow(pointSvg.y - cursorSvgY, 2))
            if (dist < minDist && dist < 20) {
              minDist = dist
              closestPoint = p
            }
          })
          if (closestPoint && minDist < minYDist) {
            minYDist = minDist
            closestFuncData = { ...funcData, closestPoint }
          }
        } else {
          if (!funcData.parsedFunc) return
          const yAtCursor = funcData.parsedFunc(cursorDataX)
          if (!isFinite(yAtCursor)) return
          const pointSvgY = toSVGCoords(cursorDataX, yAtCursor).y
          const dist = Math.abs(pointSvgY - cursorSvgY)
          if (dist < minYDist && dist < 20) {
            minYDist = dist
            closestFuncData = funcData
          }
        }
      })

      if (closestFuncData) {
        if (closestFuncData.type === "parametric" && closestFuncData.closestPoint) {
          const p = closestFuncData.closestPoint
          const markerPos = toSVGCoords(p.x, p.y)
          setHoverPoint({
            dataX: p.x, dataY: p.y, slope: null, color: closestFuncData.color,
            markerSvgX: markerPos.x, markerSvgY: markerPos.y, tooltipSvgX: cursorSvgX, tooltipSvgY: cursorSvgY, isParametric: true,
          })
        } else if (closestFuncData.parsedFunc) {
          const dataY = closestFuncData.parsedFunc(cursorDataX)
          const slope = calculateDerivativeWithCache(closestFuncData.parsedFunc, cursorDataX)
          const markerPos = toSVGCoords(cursorDataX, dataY)
          setHoverPoint({
            dataX: cursorDataX, dataY: dataY, slope: isFinite(slope) ? slope : null, color: closestFuncData.color,
            markerSvgX: markerPos.x, markerSvgY: markerPos.y, tooltipSvgX: cursorSvgX, tooltipSvgY: cursorSvgY, isParametric: false,
          })
        }
      } else {
        setHoverPoint(null)
      }
    },
    [isDragging, getSVGPoint, fromSVGCoords, toSVGCoords, memoizedPlotData, calculateDerivativeWithCache],
  )

  const throttledHover = useMemo(() => throttle(handleGraphHover, 50), [handleGraphHover])
  const handleMouseLeave = useCallback(() => {
      if (!isDragging) setHoverPoint(null);
  }, [isDragging])

  // Tooltip positioning logic (unchanged)
  let tooltipX = 0, tooltipY = 0
  const tooltipWidth = 125
  let tooltipActualHeight = 40
  if (hoverPoint) {
    tooltipActualHeight = hoverPoint.slope !== null ? 55 : 40
    tooltipX = hoverPoint.tooltipSvgX + 15
    tooltipY = hoverPoint.tooltipSvgY - tooltipActualHeight - 15
    if (tooltipX + tooltipWidth > SVG_WIDTH) tooltipX = hoverPoint.tooltipSvgX - tooltipWidth - 15
    if (tooltipX < 5) tooltipX = 5
    if (tooltipY < 5) tooltipY = hoverPoint.tooltipSvgY + 15
    if (tooltipY + tooltipActualHeight > SVG_HEIGHT) tooltipY = SVG_HEIGHT - tooltipActualHeight - 5
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="space-y-6">
        {/* ... (Function list and other controls remain the same) ... */}
        <h3 className="text-xl font-semibold text-white">Functions</h3>
        <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-slate-200 font-medium">Integral Area</h4>
            <Button
              onClick={() => setShowIntegralArea(!showIntegralArea)}
              className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
                showIntegralArea
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                  : "border border-slate-600 text-slate-300 hover:bg-slate-700/50"
              }`}
            >
              {showIntegralArea ? "On" : "Off"}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label className="text-slate-300 text-sm">a</Label>
              <Input
                type="number"
                value={integralBounds.a}
                onChange={(e) => setIntegralBounds({ ...integralBounds, a: Number(e.target.value) || 0 })}
                className="bg-slate-700/50 border-slate-600/50 text-slate-200 h-9 rounded-xl backdrop-blur-sm"
              />
            </div>
            <div>
              <Label className="text-slate-300 text-sm">b</Label>
              <Input
                type="number"
                value={integralBounds.b}
                onChange={(e) => setIntegralBounds({ ...integralBounds, b: Number(e.target.value) || 1 })}
                className="bg-slate-700/50 border-slate-600/50 text-slate-200 h-9 rounded-xl backdrop-blur-sm"
              />
            </div>
            <div>
              <Label className="text-slate-300 text-sm">Function</Label>
              <select
                value={integralBounds.functionId}
                onChange={(e) => setIntegralBounds({ ...integralBounds, functionId: Number(e.target.value) })}
                className="w-full h-9 bg-slate-700/50 border border-slate-600/50 text-slate-200 rounded-xl px-3 text-sm backdrop-blur-sm"
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
        <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-4 shadow-lg">
          <Label className="text-slate-300 text-sm mb-3 block">Quick Symbols</Label>
          <div className="grid grid-cols-4 gap-2">
            {mathSymbols.map((sym) => (
              <Button
                key={sym.symbol}
                onClick={() => addSymbolToInput(sym.value, setNewFunctionInput)}
                className="h-9 text-xs bg-slate-700/50 hover:bg-slate-600/70 text-slate-200 border border-slate-600/50 rounded-xl transition-all duration-200 hover:shadow-md"
              >
                {sym.symbol}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <Input
            placeholder="e.g., x^2, sin(x)"
            value={newFunctionInput}
            onChange={(e) => setNewFunctionInput(e.target.value)}
            className="bg-slate-700/50 border-slate-600/50 text-slate-200 rounded-xl backdrop-blur-sm"
            onKeyPress={(e) => e.key === "Enter" && onAddFunction()}
          />
          <Button
            onClick={onAddFunction}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {functions.map((func) => (
            <div
              key={func.id}
              className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: func.color }} />
                <Input
                  value={func.expression}
                  onChange={(e) => onUpdateFunction(func.id, { expression: e.target.value })}
                  className="bg-slate-700/50 border-slate-600/50 text-slate-200 text-sm h-9 rounded-xl backdrop-blur-sm"
                  disabled={func.type !== "function"}
                />
                <Button
                  onClick={() => onUpdateFunction(func.id, { visible: !func.visible })}
                  className="text-slate-400 hover:text-slate-200 h-9 w-9 p-0 rounded-xl hover:bg-slate-700/50 transition-all duration-200 flex items-center justify-center"
                >
                  {func.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={() => onRemoveFunction(func.id)}
                  className="text-red-400 hover:text-red-300 h-9 w-9 p-0 rounded-xl hover:bg-red-900/20 transition-all duration-200 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              {func.type === "function" && (
                <div className="flex gap-2 text-sm">
                  <Button
                    onClick={() => onAddDerivative(func.id)}
                    className="bg-green-600 hover:bg-green-700 text-white text-xs h-7 px-3 py-1 rounded-xl transition-all duration-200 hover:shadow-md"
                  >
                    + f'(x)
                  </Button>
                  <Button
                    onClick={() => onAddIntegral(func.id)}
                    className="bg-purple-600 hover:bg-purple-700 text-white text-xs h-7 px-3 py-1 rounded-xl transition-all duration-200 hover:shadow-md"
                  >
                    + ∫f(x)
                  </Button>
                </div>
              )}
              {func.type === "parametric" && (
                <div className="text-xs text-slate-400">
                  Parametric: t ∈ [{func.tMin}, {func.tMax}]
                </div>
              )}
              {func.type !== "function" && func.type !== "parametric" && (
                <div className="text-xs text-slate-400">
                  {func.type === "derivative" ? "Derivative" : "Integral"} of f{func.parentId}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 space-y-6">
        <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-6 shadow-lg relative">
          <div className="absolute top-6 right-6 z-10 backdrop-blur-xl bg-slate-900/80 rounded-2xl p-4 border border-slate-600/50 shadow-lg">
             <div className="flex flex-col gap-2 items-center">
                <Button
                    onClick={() => setAutoFit(true)}
                    className="w-full bg-slate-600 hover:bg-slate-700 text-white text-xs h-8 px-3 py-1 rounded-xl transition-all duration-200 hover:shadow-md"
                >
                    Auto Fit
                </Button>
                <p className="text-xs text-slate-500 text-center">Drag to pan<br/>Scroll to zoom</p>
             </div>
          </div>

          <div className="w-full h-96 relative">
            <svg
              ref={svgRef}
              className="w-full h-full absolute inset-0 touch-none rounded-xl"
              viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
              onMouseDown={handleMouseDown}
              onMouseMove={throttledHover}
              onMouseLeave={handleMouseLeave}
              onWheel={handleWheel}
              style={{ 
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                cursor: isDragging ? 'grabbing' : 'grab' 
              }}
            >
              <defs>
                <pattern id="grid" width="20" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 15" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Axis Lines */}
              <line x1="0" y1={toSVGCoords(0, 0).y} x2={SVG_WIDTH} y2={toSVGCoords(0, 0).y} stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
              <line x1={toSVGCoords(0, 0).x} y1="0" x2={toSVGCoords(0, 0).x} y2={SVG_HEIGHT} stroke="rgba(148,163,184,0.4)" strokeWidth="1" />
              
              {/* Plots and Integral Area */}
              {memoizedPlotData.map((fd) => (
                <g key={fd.id}>
                  {fd.integralPoints.length > 0 && (
                    <path
                      d={`M ${fd.integralPoints.map((p) => `${toSVGCoords(p.x, p.y).x},${toSVGCoords(p.x, p.y).y}`).join(" L ")} L ${toSVGCoords(integralBounds.b, 0).x},${toSVGCoords(integralBounds.b, 0).y} L ${toSVGCoords(integralBounds.a, 0).x},${toSVGCoords(integralBounds.a, 0).y} Z`}
                      fill={fd.color} fillOpacity="0.3"
                    />
                  )}
                  {fd.points.length > 1 && (
                    <path
                      d={`M ${fd.points.map((p) => `${toSVGCoords(p.x, p.y).x},${toSVGCoords(p.x, p.y).y}`).join(" L ")}`}
                      fill="none" stroke={fd.color}
                      strokeWidth={fd.type === "derivative" ? "1.5" : fd.type === "parametric" ? "2.5" : "2"}
                      strokeDasharray={fd.type === "derivative" ? "4,4" : fd.type === "integral" ? "8,4" : "none"}
                      opacity={fd.type === "function" || fd.type === "parametric" ? 1 : 0.8}
                      strokeLinejoin="round" strokeLinecap="round"
                    />
                  )}
                </g>
              ))}

              {/* Hover Tooltip and Marker */}
              {hoverPoint && !isDragging && (
                <>
                  <circle cx={hoverPoint.markerSvgX} cy={hoverPoint.markerSvgY} r="4" fill={hoverPoint.color} stroke="#fff" strokeWidth="1.5" />
                  <g transform={`translate(${tooltipX}, ${tooltipY})`}>
                    <rect width={tooltipWidth} height={tooltipActualHeight} rx="8" fill="rgba(15,23,42,0.95)" stroke={hoverPoint.color} strokeWidth="1" />
                    <text x="8" y="15" fill="#fff" fontSize="10" fontFamily="monospace">x: {hoverPoint.dataX.toFixed(3)}</text>
                    <text x="8" y="30" fill="#fff" fontSize="10" fontFamily="monospace">y: {hoverPoint.dataY.toFixed(3)}</text>
                    {hoverPoint.slope !== null && !hoverPoint.isParametric && (
                      <text x="8" y="45" fill={hoverPoint.color} fontSize="10" fontFamily="monospace">m: {hoverPoint.slope.toFixed(2)}</text>
                    )}
                  </g>
                </>
              )}

              {/* Axis Labels and Bounds */}
              <text x={SVG_WIDTH - 10} y={toSVGCoords(0, 0).y - 5} textAnchor="end" fill="rgba(148,163,184,0.6)" fontSize="12">x</text>
              <text x={toSVGCoords(0, 0).x + 5} y="15" fill="rgba(148,163,184,0.6)" fontSize="12">y</text>
              <text x="10" y={SVG_HEIGHT - 10} fill="rgba(148,163,184,0.5)" fontSize="10">({currentBounds.minX.toFixed(1)}, {currentBounds.minY.toFixed(1)})</text>
              <text x={SVG_WIDTH - 10} y="20" textAnchor="end" fill="rgba(148,163,184,0.5)" fontSize="10">({currentBounds.maxX.toFixed(1)}, {currentBounds.maxY.toFixed(1)})</text>
            </svg>
          </div>
        </div>

        {/* Results section (unchanged) */}
        <div className="backdrop-blur-xl bg-slate-800/40 border border-slate-600/30 rounded-2xl p-6 shadow-lg">
          <h4 className="text-slate-200 font-medium mb-4">Results</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {functions
              .filter((f) => f.id === integralBounds.functionId && f.parsedFunc)
              .map((func) => {
                const integralVal = MathParser.integrate(func.parsedFunc, integralBounds.a, integralBounds.b)
                return (
                  <div key={func.id} className="text-slate-300">
                    <div className="text-slate-400">
                      ∫ {func.expression} dx from {integralBounds.a} to {integralBounds.b}
                    </div>
                    <div className="text-lg font-mono text-cyan-300">
                      {isFinite(integralVal) ? integralVal.toFixed(4) : "undefined"}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}