import { createContext, useContext, useState, ReactNode } from "react";

type Mode = 'normal' | 'visual' | 'insert' | undefined;

interface ModeContextProps {
  currentMode: Mode;
  setCurrentMode: (mode: Mode) => void;    
}

const defaultValue: ModeContextProps = {
  currentMode: "normal",
  setCurrentMode: () => {},
};

const ModeContext = createContext<ModeContextProps>(defaultValue);

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }: {children: ReactNode}) => {
  const [currentMode, setCurrentMode] = useState<Mode>("normal");

  return (
    <ModeContext.Provider value={{ currentMode, setCurrentMode }}>
      {children}
    </ModeContext.Provider>
  );
};
