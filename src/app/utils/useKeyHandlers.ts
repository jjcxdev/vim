import { useEffect } from "react";

type KeyState = Record<string, boolean>;
type ModeSetter = (mode: string) => void;
type CurrentMode = string;

export const useKeyHandler = (
  setCurrentMode: ModeSetter,
  currentMode: CurrentMode,
  setKeyState: React.Dispatch<React.SetStateAction<KeyState>>,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(`Key down: ${event.key}`);
      event.preventDefault();
      setKeyState((prevState) => ({ ...prevState, [event.key]: true }));

      if (currentMode === "normal") {
        if (event.key === "v") {
          setCurrentMode("visual");
        } else if (event.key === "i") {
          setCurrentMode("insert");
        }
      } else if (event.key === "Escape") {
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
