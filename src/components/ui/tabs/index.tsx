import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

interface TabsContextType {
  active: string;
  setActive: (v: string) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

export function Tabs({
  defaultValue,
  onValueChange,
  children,
}: {
  defaultValue: string;
  onValueChange?: (v: string) => void;
  children: ReactNode;
}) {
  const [active, setActive] = useState(defaultValue);

  // bubble up changes
  useEffect(() => {
    onValueChange?.(active);
  }, [active]);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex space-x-2">{children}</div>;
}

export function TabsTrigger({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  const ctx = useContext(TabsContext)!;
  const isActive = ctx.active === value;
  return (
    <button
      onClick={() => ctx.setActive(value)}
      className={`px-4 py-2 rounded ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  const ctx = useContext(TabsContext)!;
  return ctx.active === value ? <div className="p-4">{children}</div> : null;
}
