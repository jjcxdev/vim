import { createContext, useContext, useState } from "react";

const defaultValue = {
  currentMode: "normal",
  setCurrentMode: () => {},
};

const ModeContext = createContext(defaultValue);

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("normal");

  return (
    <ModeContext.Provider value={{ currentMode, setCurrentMode }}>
      {children}
    </ModeContext.Provider>
  );
};
