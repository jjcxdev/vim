import { ReactNode } from "react";
import {
  NormalModeKeyLabels,
  InsertModeKeyLabels,
  VisualModeKeyLabels,
} from "../utils/KeyLabels";
import { getActiveKeysForMode } from "../utils/ActiveKeys";

interface KeyProps {
  children?: ReactNode;
  action: string;
  mode?: "normal" | "visual" | "insert";
  isPressed?: boolean;
}

export default function Key({
  children,
  action,
  mode = "normal",
  isPressed,
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

  const isActiveInMode = activeKeys.includes(action);
  console.log(`Is ${action} active in ${mode}? ${isActiveInMode}`);

  if (isActiveInMode) {
    additionalModeClass = ` key-${safeMode}`; // Apply only if key is active in current mode
  }

  // DO NOT REMOVE THIS - GLOBAL KEYPRESS REGARDLESS OF MODE
  let borderColor = isPressed ? "yellow" : ""; // yellow when pressed or inital styling

  // Construct className with base key class and additional mode class
  const className = `key${additionalModeClass}`;

  // Pass GLOBAL KEY PRESS to keys
  return (
    <kbd
      className={className}
      style={{
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: "1px",
      }}
    >
      <label className="labels">{children}</label>
    </kbd>
  );
}
