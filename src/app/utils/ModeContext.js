import { createContext, useContext, useState } from "react";

const ModeContext = createContext();

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("normal");

  return (
    <ModeContext.Provider value={{ currentMode, setCurrentMode }}>
      {children}
    </ModeContext.Provider>
  );
};
