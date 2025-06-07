"use client"

export function Button({ children, onClick, disabled, className, ...props }) {
  return (
    <button onClick={onClick} disabled={disabled} className={className} {...props}>
      {children}
    </button>
  )
}
