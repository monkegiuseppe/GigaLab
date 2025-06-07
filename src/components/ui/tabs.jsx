"use client"

import { createContext, useContext, useState, useEffect } from "react"

const TabsContext = createContext(null)

export function Tabs({ defaultValue, onValueChange, children }) {
  const [active, setActive] = useState(defaultValue)

  // bubble up changes
  useEffect(() => {
    onValueChange?.(active)
  }, [active, onValueChange])

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className, style }) {
  return (
    <div className={className || "flex space-x-2"} style={style}>
      {children}
    </div>
  )
}

export function TabsTrigger({ value, children, style, className }) {
  const ctx = useContext(TabsContext)
  const isActive = ctx.active === value
  return (
    <button
      onClick={() => ctx.setActive(value)}
      className={className}
      style={style}
      // This data-state attribute is the key fix.
      // It allows the `data-[state=active]:...` Tailwind classes to work.
      data-state={isActive ? "active" : "inactive"}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children }) {
  const ctx = useContext(TabsContext)
  return ctx.active === value ? <div>{children}</div> : null
}
