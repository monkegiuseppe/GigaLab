import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

const TabsContext = createContext(null);

function Tabs({ defaultValue, onValueChange, children }) {
  const [active, setActive] = useState(defaultValue);

  // bubble up changes
  useEffect(() => {
    if (onValueChange) {
      onValueChange(active);
    }
  }, [active, onValueChange]);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children, className, style }) {
  return <div className={className || "flex space-x-2"} style={style}>{children}</div>;
}

function TabsTrigger({ value, children, style, className }) {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }
  const isActive = ctx.active === value;
  
  // This combines the default className with any provided className
  const combinedClassName = [
    className,
    !className && `px-4 py-2 rounded ${isActive ? "bg-blue-600 text-white" : "bg-gray-200"}`
  ].filter(Boolean).join(' ');

  return (
    <button
      onClick={() => ctx.setActive(value)}
      className={combinedClassName}
      style={style}
      data-state={isActive ? 'active' : 'inactive'} // For Shadcn compatibility
    >
      {children}
    </button>
  );
}

function TabsContent({ value, children }) {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("TabsContent must be used within a Tabs component");
  }
  return ctx.active === value ? <div className="p-4">{children}</div> : null;
}

// Add PropTypes for better development-time checking in JS
Tabs.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

TabsList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

TabsTrigger.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

TabsContent.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


// The fix: Export everything just once at the end.
export { Tabs, TabsContent, TabsList, TabsTrigger };