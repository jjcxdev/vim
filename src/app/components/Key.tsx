import { ReactNode } from "react";
import {
  NormalModeKeyLabels,
  InsertModeKeyLabels,
  VisualModeKeyLabels,
} from "../utils/KeyLabels";
import { getActiveKeysForMode } from "../utils/ActiveKeys";

interface KeyProps {
  children?: ReactNode;
  upper: ReactNode;
  lower: ReactNode;
  actions: string[];
  mode?: "normal" | "visual" | "insert";
  isPressed?: boolean;
  className?: string;
}

export default function Key({
  upper,
  lower,
  children,
  actions = [],
  mode = "normal",
  isPressed,
  className = "",
}: KeyProps) {
  // Initial styling, nothing additional applied
  let additionalModeClass = "";

  const safeMode: "normal" | "visual" | "insert" = mode as
    | "normal"
    | "visual"
    | "insert";

  const keyLabels = {
    normal: NormalModeKeyLabels,
    visual: VisualModeKeyLabels,
    insert: InsertModeKeyLabels,
  }[safeMode];

  let activeKeys: string[] = [];

  if (keyLabels) {
    activeKeys = getActiveKeysForMode(keyLabels, safeMode);
  }

  const isActiveInMode = actions.some((action) => activeKeys.includes(action));
  //console.log(`Is ${action} active in ${mode}? ${isActiveInMode}`);

  if (isActiveInMode) {
    additionalModeClass = ` key-${safeMode}`; // Apply only if key is active in current mode
  }

  // DO NOT REMOVE THIS - GLOBAL KEYPRESS REGARDLESS OF MODE
  let borderColor = isPressed ? "yellow" : ""; // yellow when pressed or inital styling

  // Construct className with base key class and additional mode class
  const combinedClassName = `key${additionalModeClass} ${className}`.trim();

  // Pass GLOBAL KEY PRESS to keys
  return (
    <kbd
      className={combinedClassName}
      style={{
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: "1px",
      }}
    >
      <div className="flex justify-center items-center flex-col">
        <div>{upper}</div>
        <div>{lower}</div>
      </div>
    </kbd>
  );
}
