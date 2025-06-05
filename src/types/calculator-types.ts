// (Same as types.ts before, just path changed)
export interface FunctionPlotData {
  id: number
  expression: string
  color: string
  visible: boolean
  type: "function" | "derivative" | "integral"
  parentId: number | null
  points: { x: number; y: number }[]
  integralPoints: { x: number; y: number }[]
  parsedFunc: ParsedFunction
}

export interface ParsedFunction extends Function {
  (x: number): number
  originalExpression?: string
}

export interface HoverPointInfo {
  dataX: number
  dataY: number
  slope: number | null
  color: string
  markerSvgX: number
  markerSvgY: number
  tooltipSvgX: number
  tooltipSvgY: number
}
