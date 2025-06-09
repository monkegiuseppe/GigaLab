"use client"

import { useState, useEffect } from "react"
import { Grid3X3, Plus, Minus } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { MatrixOps } from "../../lib/calculator/matrix-utils" // UPDATED IMPORT

const MatrixInputDisplay = ({
  matrix,
  onChange,
  onAddRow,
  onRemoveRow,
  onAddCol,
  onRemoveCol,
  label,
  det,
  transpose,
  detColorClass,
}) => (
  <div className="space-y-4">
    <Label className="text-slate-200 text-lg font-medium">{label}</Label>

    <div className="flex gap-2 ml-8">
      {matrix[0]?.map((_, j) => (
        <Button
          key={j}
          onClick={() => onRemoveCol(j)}
          className="h-8 w-16 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/30 border border-red-500/30 hover:border-red-400/50 rounded-xl transition-all duration-200 backdrop-blur-sm"
          disabled={matrix[0].length <= 1}
        >
          <Minus className="w-3 h-3" />
        </Button>
      ))}
    </div>

    <div className="w-full max-w-sm overflow-x-auto backdrop-blur-xl bg-slate-800/40 p-4 rounded-2xl border border-slate-600/30 shadow-lg">
      <div className="space-y-3 inline-block min-w-full">
        {matrix.map((row, i) => (
          <div key={i} className="flex gap-3 items-center">
            <Button
              onClick={() => onRemoveRow(i)}
              className="h-9 w-9 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/30 border border-red-500/30 hover:border-red-400/50 rounded-xl transition-all duration-200 backdrop-blur-sm"
              disabled={matrix.length <= 1}
            >
              <Minus className="w-3 h-3" />
            </Button>
            {row.map((val, j) => (
              <Input
                key={j}
                type="number"
                value={val}
                onChange={(e) => onChange(i, j, Number(e.target.value))}
                className="bg-slate-700/50 border-slate-600/50 text-slate-200 w-16 h-9 text-center rounded-xl backdrop-blur-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-all duration-200 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20"
              />
            ))}
          </div>
        ))}
      </div>
    </div>

    <div className="flex gap-3">
      <Button
        onClick={onAddRow}
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-blue-500/30"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Row
      </Button>
      <Button
        onClick={onAddCol}
        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-purple-500/30"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Column
      </Button>
    </div>

    {det !== null && (
      <div className="backdrop-blur-xl bg-slate-800/40 p-4 rounded-2xl border border-slate-600/30 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm">det({label.charAt(label.length - 1)}) = </span>
          <span className={`font-mono text-lg font-semibold ${detColorClass}`}>{det}</span>
        </div>
      </div>
    )}

    {transpose && (
      <div className="backdrop-blur-xl bg-slate-800/40 p-4 rounded-2xl border border-slate-600/30 shadow-lg">
        <div className="text-slate-400 text-sm mb-3 font-medium">
          {label.charAt(label.length - 1)}
          <sup>T</sup> =
        </div>
        {typeof transpose === "string" ? (
          <div className="text-red-400 text-sm">{transpose}</div>
        ) : (
          <div className="overflow-x-auto max-w-full">
            <div className="space-y-2 inline-block min-w-full">
              {transpose.map((r, i) => (
                <div key={i} className="flex gap-2">
                  {r.map((v, j) => (
                    <span
                      key={j}
                      className="font-mono text-indigo-300 text-sm w-12 text-center shrink-0 bg-slate-700/30 rounded-lg py-1"
                    >
                      {v.toFixed(2)}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )}
  </div>
)

export default function LinearAlgebraTab() {
  const [matrixA, setMatrixA] = useState([
    [1, 2],
    [3, 4],
  ])
  const [matrixB, setMatrixB] = useState([
    [5, 6],
    [7, 8],
  ])
  const [detAResult, setDetAResult] = useState(null)
  const [transposeAResult, setTransposeAResult] = useState(null)
  const [detBResult, setDetBResult] = useState(null)
  const [transposeBResult, setTransposeBResult] = useState(null)
  const [productABResult, setProductABResult] = useState(null)
  const [productABError, setProductABError] = useState(null)
  const [inverseAResult, setInverseAResult] = useState(null)
  const [inverseAError, setInverseAError] = useState(null)

  const updateMatrix = (setter, i, j, v) =>
    setter((p) => p.map((r, ri) => (ri === i ? r.map((c, ci) => (ci === j ? v : c)) : r)))
  const addRow = (setter) => setter((p) => [...p, new Array(p[0]?.length || 1).fill(0)])
  const removeRow = (setter, i) => setter((p) => (p.length > 1 ? p.filter((_, ri) => ri !== i) : p))
  const addCol = (setter) => setter((p) => p.map((r) => [...r, 0]))
  const removeCol = (setter, j) => setter((p) => (p[0].length > 1 ? p.map((r) => r.filter((_, ci) => ci !== j)) : p))

  useEffect(() => {
    try {
      setDetAResult(MatrixOps.determinant(matrixA).toFixed(4))
    } catch(e) {
      setDetAResult(e.message.includes("square") ? "Not Square" : "Error")
    }
    try {
      setTransposeAResult(MatrixOps.transpose(matrixA))
    } catch {
      setTransposeAResult("Error")
    }
    try {
      setDetBResult(MatrixOps.determinant(matrixB).toFixed(4))
    } catch(e) {
      setDetBResult(e.message.includes("square") ? "Not Square" : "Error")
    }
    try {
      setTransposeBResult(MatrixOps.transpose(matrixB))
    } catch {
      setTransposeBResult("Error")
    }
    try {
      setProductABResult(MatrixOps.multiply(matrixA, matrixB))
      setProductABError(null)
    } catch (e) {
      setProductABResult(null)
      setProductABError(e.message)
    }
    try {
      setInverseAResult(MatrixOps.inverse(matrixA))
      setInverseAError(null)
    } catch (e) {
      setInverseAResult(null)
      setInverseAError(e.message)
    }
  }, [matrixA, matrixB])

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <Grid3X3 className="w-6 h-6 text-purple-400" />
        <h3 className="text-2xl font-semibold text-white">Matrix Operations</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <MatrixInputDisplay
          matrix={matrixA}
          onChange={(i, j, v) => updateMatrix(setMatrixA, i, j, v)}
          onAddRow={() => addRow(setMatrixA)}
          onRemoveRow={(i) => removeRow(setMatrixA, i)}
          onAddCol={() => addCol(setMatrixA)}
          onRemoveCol={(j) => removeCol(setMatrixA, j)}
          label="Matrix A"
          det={detAResult}
          transpose={transposeAResult}
          detColorClass="text-cyan-300"
        />

        <MatrixInputDisplay
          matrix={matrixB}
          onChange={(i, j, v) => updateMatrix(setMatrixB, i, j, v)}
          onAddRow={() => addRow(setMatrixB)}
          onRemoveRow={(i) => removeRow(setMatrixB, i)}
          onAddCol={() => addCol(setMatrixB)}
          onRemoveCol={(j) => removeCol(setMatrixB, j)}
          label="Matrix B"
          det={detBResult}
          transpose={transposeBResult}
          detColorClass="text-green-300"
        />

        <div className="space-y-6">
          <Label className="text-slate-200 text-lg font-medium">Results</Label>

          {productABResult && (
            <div className="backdrop-blur-xl bg-slate-800/40 p-6 rounded-2xl border border-slate-600/30 shadow-lg">
              <div className="text-slate-400 text-sm mb-4 font-medium">A × B =</div>
              <div className="overflow-x-auto max-w-full backdrop-blur-sm bg-slate-700/30 p-3 rounded-xl">
                <div className="space-y-2 inline-block min-w-full">
                  {productABResult.map((r, i) => (
                    <div key={i} className="flex gap-2">
                      {r.map((v, j) => (
                        <span
                          key={j}
                          className="font-mono text-purple-300 text-sm w-14 shrink-0 bg-slate-600/40 rounded-lg py-2 text-center"
                        >
                          {v.toFixed(2)}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {productABError && (
            <div className="text-amber-300 text-sm p-4 bg-amber-900/30 border border-amber-700/50 rounded-2xl backdrop-blur-sm">
              <div className="font-medium mb-1">Multiplication Error:</div>
              {productABError}
            </div>
          )}

          {inverseAResult && (
            <div className="backdrop-blur-xl bg-slate-800/40 p-6 rounded-2xl border border-slate-600/30 shadow-lg">
              <div className="text-slate-400 text-sm mb-4 font-medium">A⁻¹ =</div>
              <div className="overflow-x-auto max-w-full backdrop-blur-sm bg-slate-700/30 p-3 rounded-xl">
                <div className="space-y-2 inline-block min-w-full">
                  {inverseAResult.map((r, i) => (
                    <div key={i} className="flex gap-2">
                      {r.map((v, j) => (
                        <span
                          key={j}
                          className="font-mono text-rose-300 text-sm w-14 shrink-0 bg-slate-600/40 rounded-lg py-2 text-center"
                        >
                          {v.toFixed(3)}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {inverseAError && (
            <div className="text-amber-300 text-sm p-4 bg-amber-900/30 border border-amber-700/50 rounded-2xl backdrop-blur-sm">
              <div className="font-medium mb-1">Inverse Error:</div>
              {inverseAError}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}