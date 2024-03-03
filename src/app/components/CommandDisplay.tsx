import { useMode } from "../utils/ModeContext";
import {
  InsertModeKeyLabels,
  KeyAction,
  NormalModeKeyLabels,
  VisualModeKeyLabels,
} from "../utils/KeyLabels";

type Mode = "normal" | "visual" | "insert";

const subheadings = {
  normal: {
    "Movement Commands": ["0", "h", "j", "k", "l", "w", "e", "b", "$", "gg", "G"],
    "Editing Commands": ["dd", "yy", "p", "C", "s", "S", "cc", "ciw", "di'"],
    "Undo/Redo Commands": ["u", "Control + r"],
    "Search and Replace Commands": ["/", "n", "N", "?", ":%s/old/new/g", "*", "#", ":g/old/d"],
    "Window and Screen Management Commands": [":split", ":vsplit", "zz"],
    "Mode Transition Commands": ["i", "I", "A", "o", "O", "v", "V", "Control + v"],
    "Replace Mode Commands": ["R", "gR"],
    "Advanced Editing and Selection": ["vi[", "."],
    "Register and Macro Operations": ["qa", "q", "@a"],
    "Fold Manipulation Commands": ["zf", "zo", "zc"],
    "Marks and Navigation Commands": ["ma", "`a"],
    "Pattern Matching and Line Manipulation": [":m"],
    "Command Mode Entry": [":"],
  },

  visual: {
    "Mode Transition": ["Escape"],
    "Editing Commands": [">", "<", "y", "d"],
    "Case Manipulation Commands": ["~", "u", "U"],
  },

  insert: {
    "Mode Transition": ["Escape"],
    "Text Deletion": ["Backspace", "Control + h", "Control + w", "Control + u", "Control + k"],
    "Autocomplete": ["Control + n", "Control + p"],
  },
};

const modeKeyLabels: Record<Mode, KeyAction> = {
  normal: NormalModeKeyLabels,
  visual: VisualModeKeyLabels,
  insert: InsertModeKeyLabels,
};


const CommandDisplay = () => {
  const { currentMode } = useMode();

  if (!currentMode) {
    return <div>Invalid mode</div>
  }

  const currentSubheadings = subheadings[currentMode]
  const keyActions = modeKeyLabels[currentMode];

  const getHeading = (mode: Mode) => {
    const headings: Record<Mode, string> = {
      normal: "// Normal Mode Commands",
      visual: "// Visual Mode Commands",
      insert: "// Insert Mode Commands",
    };
    return headings[mode] || "Commands";
  };

  return (
    <div className="max-w-[950px] h-full flex flex-col">
      <h1 className="py-4">{getHeading(currentMode)}</h1>
      <div className="border h-60 border-gray-700 px-4 py-2 overflow-scroll scroll-box grid grid-cols-4 rounded-lg">
        {Object.entries(currentSubheadings).map(([subheading, keys]) => (
          <div key={subheading}>
            <div className="text-green-500 py-1">{subheading}</div>
            <div className="overflow-y-scroll">
              {keys.map((key: string) => {
                const actionDescription = keyActions[key]?.[currentMode];
                return actionDescription ? (
                  <div
                    className="flex py-1 whitespace-nowrap flex-row items-center text-xs gap-2"
                    key={key}
                  >
                    <div className="px-2 whitespace-nowrap py-[2px] rounded-md text-white border border-gray-700 bg-gray-50/10">
                      {key}
                    </div>
                    <div className="text-gray-400">
                      {actionDescription}
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandDisplay;
