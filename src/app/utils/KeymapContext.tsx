import { createContext, useState, useContext, ReactNode } from "react";

interface KeymapContextType {
  keymap: Record<string, any>;
  setKeymap: (keymap: Record<string, any>) => void;
}

const defaultContextValue: KeymapContextType = {
  keymap: {},
  setKeymap: () => {},
};

const KeymapContext = createContext<KeymapContextType>(defaultContextValue);

export const useKeymap = () => useContext(KeymapContext);

interface KeymapProviderProps {
  children: ReactNode;
}

export const KeymapProvider = ({ children }: KeymapProviderProps) => {
  const [keymap, setKeymap] = useState<Record<string, any>>({
    testKey: "This is a test",
  });

  return (
    <KeymapContext.Provider value={{ keymap, setKeymap }}>
      {children}
    </KeymapContext.Provider>
  );
};
