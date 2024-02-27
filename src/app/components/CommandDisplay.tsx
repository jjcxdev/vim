import { useMode } from "../utils/ModeContext.js";
import {
  InsertModeKeyLabels,
  KeyAction,
  NormalModeKeyLabels,
  VisualModeKeyLabels,
} from "../utils/KeyLabels";

type Mode = "normal" | "visual" | "insert";

const CommandDisplay = () => {
  const { currentMode } = useMode();

  const modeKeyLabels: Record<Mode, KeyAction> = {
    normal: NormalModeKeyLabels,
    visual: VisualModeKeyLabels,
    insert: InsertModeKeyLabels,
  };

  const keyActions = modeKeyLabels[currentMode as Mode];

  const getHeading = (mode: Mode) => {
    const headings: Record<Mode, string> = {
      normal: "// Normal Mode Commands",
      visual: "// Visual Mode Commands",
      insert: "// Insert Mode Commands",
    };
    return headings[mode] || "Commands";
  };

  return (
    <div className="w-full max-w-[950px] flex flex-col">
      <h2 className="text-gray-400 py-4">{getHeading(currentMode as Mode)}</h2>
      <div className="overflow-y-scroll columns-4 p-2 border border-gray-700 rounded-lg h-full">
        {Object.entries(keyActions).map(([key, action]) => {
          const actionDescription = action[currentMode as Mode];
          return (
            <div className="py-1">
              <div
                className="flex flex-row items-center text-xs gap-2"
                key={key}
              >
                <div className="px-2 whitespace-nowrap py-[2px] rounded-md text-white border border-gray-700 bg-gray-50/10">
                  {key}
                </div>
                <div className="whitespace-nowrap text-gray-400">
                  {actionDescription}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommandDisplay;
