import { createContext, type ReactNode, useContext, useState } from "react";

type TabsContextProps = {
  value: string;
  onChange: (value: string) => void;
};

const TabsContext = createContext<TabsContextProps | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within Tabs");
  }
  return context;
};
type TabsProps = {
  defaultValue: string;
  children: ReactNode;
  className?: string;
};

const Tabs = ({ defaultValue, children, className }: TabsProps) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
