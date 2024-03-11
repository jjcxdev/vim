import { useEffect } from "react";

export type Mode = 'normal' | 'visual' | 'insert' | undefined;
export type KeyState = Record<string, boolean>;
type ModeSetter = (mode: Mode) => void;
type CurrentMode = 'normal' | 'visual' | 'insert' | undefined;

let visualKeys = ["v", "V"];
let insertKeys = ["i", "I", "a", "A", "o", "O"]

export const useKeyHandler = (
  setCurrentMode: ModeSetter,
  currentMode: CurrentMode,
  setKeyState: React.Dispatch<React.SetStateAction<KeyState>>,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      
      console.log(`Key down: ${event.key}`);
      const keyValue = event.shiftKey ? `${event.key}` : event.key;
      console.log(`Key down: ${keyValue}`);
      event.preventDefault();
      setKeyState((prevState) => ({ ...prevState, [event.key]: true }));

      if (currentMode === "normal") {
        if (visualKeys.includes(event.key)) {
          setCurrentMode("visual");
        } else if (insertKeys.includes(event.key)) {
          setCurrentMode("insert");
        }
      } else if (event.key === "Escape") {
        setCurrentMode("normal");
      } else if (event.ctrlKey && event.key === "c"){
        setCurrentMode("normal");
      }
    }; 

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeyState((prevState) => ({ ...prevState, [event.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentMode, setCurrentMode, setKeyState]);
};
