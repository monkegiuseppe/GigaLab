import { useState, useEffect } from "react"
import { Grid3X3, Plus, Minus } from "lucide-react"
// USER'S COMPONENTS
import { Button } from "../ui/button" // Adjust path
// Shadcn/ui components - assuming these are available
import { Input } from "../ui/input"
import { Label } from "../ui/label"

import { MatrixOps } from "../../lib/calculator/matrix-utils"

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
  detColorClass
}) => (
  <div className="space-y-3">
    <Label className="text-slate-200">{label}</Label>
    <div className="flex gap-2 ml-8">
      {matrix[0]?.map((_, j) => (
        <Button
          key={j}
          onClick={() => onRemoveCol(j)}
          className="h-6 w-16 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/20"
          disabled={matrix[0].length <= 1}
        >
          <Minus className="w-3 h-3" />
        </Button>
      ))}
    </div>
    <div className="space-y-2">
      {matrix.map((row, i) => (
        <div key={i} className="flex gap-2 items-center">
          <Button
            onClick={() => onRemoveRow(i)}
            className="h-8 w-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/20"
            disabled={matrix.length <= 1}
          >
            <Minus className="w-3 h-3" />
          </Button>
          {row.map((val, j) => (
            <Input
              key={j}
              type="number"
              value={val}
              onChange={e => onChange(i, j, Number(e.target.value))}
              className="bg-slate-700/50 border-slate-600 text-slate-200 w-16 h-8 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          ))}
        </div>
      ))}
    </div>
    <div className="flex gap-2">
      <Button
        onClick={onAddRow}
        className="bg-slate-600 hover:bg-slate-700 text-slate-200 px-2 py-1 text-sm rounded"
      >
        <Plus className="w-3 h-3 mr-1" />
        Row
      </Button>
      <Button
        onClick={onAddCol}
        className="bg-slate-600 hover:bg-slate-700 text-slate-200 px-2 py-1 text-sm rounded"
      >
        <Plus className="w-3 h-3 mr-1" />
        Col
      </Button>
    </div>
    {det !== null && (
      <div
        className={`mt-2 bg-slate-700/30 p-2 rounded border border-slate-600/30 text-xs`}
      >
        <span className="text-slate-400">
          det({label.charAt(label.length - 1)}) ={" "}
        </span>
        <span className={`font-mono text-sm ${detColorClass}`}>{det}</span>
      </div>
    )}
    {transpose && (
      <div className="mt-2 bg-slate-700/30 p-2 rounded border border-slate-600/30">
        <div className="text-slate-400 text-xs mb-1">
          {label.charAt(label.length - 1)}
          <sup>T</sup> =
        </div>
        {typeof transpose === "string" ? (
          <div className="text-red-400 text-xs">{transpose}</div>
        ) : (
          <div className="space-y-1">
            {transpose.map((r, i) => (
              <div key={i} className="flex gap-1">
                {r.map((v, j) => (
                  <span
                    key={j}
                    className="font-mono text-indigo-300 text-xs w-10 text-center"
                  >
                    {v.toFixed(2)}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    )}
  </div>
)

export default function LinearAlgebraTab() {
  const [matrixA, setMatrixA] = useState([
    [1, 2],
    [3, 4]
  ])
  const [matrixB, setMatrixB] = useState([
    [5, 6],
    [7, 8]
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
    setter(p =>
      p.map((r, ri) => (ri === i ? r.map((c, ci) => (ci === j ? v : c)) : r))
    )
  const addRow = setter =>
    setter(p => [...p, new Array(p[0]?.length || 1).fill(0)])
  const removeRow = (setter, i) =>
    setter(p => (p.length > 1 ? p.filter((_, ri) => ri !== i) : p))
  const addCol = setter => setter(p => p.map(r => [...r, 0]))
  const removeCol = (setter, j) =>
    setter(p =>
      p[0].length > 1 ? p.map(r => r.filter((_, ci) => ci !== j)) : p
    )

  useEffect(() => {
    try {
      setDetAResult(
        matrixA.length === matrixA[0]?.length
          ? MatrixOps.determinant(matrixA).toFixed(4)
          : "Not Square"
      )
    } catch {
      setDetAResult("Error")
    }
    try {
      setTransposeAResult(MatrixOps.transpose(matrixA))
    } catch {
      setTransposeAResult("Error")
    }
    try {
      setDetBResult(
        matrixB.length === matrixB[0]?.length
          ? MatrixOps.determinant(matrixB).toFixed(4)
          : "Not Square"
      )
    } catch {
      setDetBResult("Error")
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
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-2">
        <Grid3X3 className="w-5 h-5" />
        Matrix Operations
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MatrixInputDisplay
          matrix={matrixA}
          onChange={(i, j, v) => updateMatrix(setMatrixA, i, j, v)}
          onAddRow={() => addRow(setMatrixA)}
          onRemoveRow={i => removeRow(setMatrixA, i)}
          onAddCol={() => addCol(setMatrixA)}
          onRemoveCol={j => removeCol(setMatrixA, j)}
          label="Matrix A"
          det={detAResult}
          transpose={transposeAResult}
          detColorClass="text-cyan-300"
        />
        <MatrixInputDisplay
          matrix={matrixB}
          onChange={(i, j, v) => updateMatrix(setMatrixB, i, j, v)}
          onAddRow={() => addRow(setMatrixB)}
          onRemoveRow={i => removeRow(setMatrixB, i)}
          onAddCol={() => addCol(setMatrixB)}
          onRemoveCol={j => removeCol(setMatrixB, j)}
          label="Matrix B"
          det={detBResult}
          transpose={transposeBResult}
          detColorClass="text-green-300"
        />
        <div className="space-y-4">
          <Label className="text-slate-200">Results</Label>
          {productABResult && (
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30">
              <div className="text-slate-400 text-sm mb-2">A × B =</div>
              <div className="space-y-1">
                {productABResult.map((r, i) => (
                  <div key={i} className="flex gap-2">
                    {r.map((v, j) => (
                      <span
                        key={j}
                        className="font-mono text-purple-300 text-sm w-12"
                      >
                        {v.toFixed(2)}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          {productABError && (
            <div className="text-amber-300 text-sm p-3 bg-amber-900/30 border border-amber-700/50 rounded">
              {productABError}
            </div>
          )}
          {inverseAResult && (
            <div className="bg-slate-700/30 p-3 rounded border border-slate-600/30">
              <div className="text-slate-400 text-sm mb-2">A⁻¹ =</div>
              <div className="space-y-1">
                {inverseAResult.map((r, i) => (
                  <div key={i} className="flex gap-2">
                    {r.map((v, j) => (
                      <span
                        key={j}
                        className="font-mono text-rose-300 text-sm w-12"
                      >
                        {v.toFixed(3)}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
          {inverseAError && (
            <div className="text-amber-300 text-sm p-3 bg-amber-900/30 border border-amber-700/50 rounded">
              {inverseAError}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
