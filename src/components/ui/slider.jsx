"use client"

export function Slider({ value, onValueChange, min, max, step, className }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value?.[0] || 0}
      onChange={(e) => onValueChange([Number(e.target.value)])}
      className={className}
      style={{ width: "100%" }}
    />
  )
}
