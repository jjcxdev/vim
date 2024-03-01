"use client";
import Key from "@/app/components/Key";
import { GrCommand } from "react-icons/gr";
import { ImShift } from "react-icons/im";
import { IoBackspaceOutline } from "react-icons/io5";
import { BsCapslock } from "react-icons/bs";
import { ImCtrl } from "react-icons/im";
import { MdSpaceBar } from "react-icons/md";
import { GrReturn } from "react-icons/gr";
import { useState } from "react";
import Image from "next/image";
import { MAC_KEYS } from "@/app/utils/constants";
import Indicator from "@/app/components/Indicators";
import { useMode } from "@/app/utils/ModeContext";
import { MdOutlineKeyboardOptionKey } from "react-icons/md";
import { useKeyHandler } from "@/app/utils/useKeyHandlers";

export default function Voyager() {
  const { currentMode, setCurrentMode } = useMode();
  const [keyState, setKeyState] = useState<KeyState>({});

  useKeyHandler(setCurrentMode, currentMode, setKeyState);

  return (
    <main className="flex flex-col min-w-[950px]">
      <div className="flex justify-between flex-row">
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="left-group">
          <div className="left-group-main flex gap-2">
            <div className="first-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[MAC_KEYS.CapsLock] || false}
                actions={[MAC_KEYS.CapsLock]}
                mode={currentMode}
              >
                <BsCapslock />
              </Key>
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState[MAC_KEYS.Control] || false}
                actions={[MAC_KEYS.Control]}
                mode={currentMode}
              >
                <ImCtrl />
              </Key>
              <Key
                isPressed={keyState[MAC_KEYS.Shift] || false}
                actions={[MAC_KEYS.Shift]}
                mode={currentMode}
              >
                <ImShift />
              </Key>
            </div>
            <div className="second-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["q"] || false}
                actions={["q"]}
                mode={currentMode}
              >
                Q
              </Key>
              <Key
                isPressed={keyState["a"] || false}
                actions={["a", "@"]}
                mode={currentMode}
              >
                <div>A</div>
                <div>@</div>
              </Key>
              <Key
                isPressed={keyState["z"] || false}
                actions={["z", "option"]}
                mode={currentMode}
              >
                <div>Z</div>
                <div>
                  <MdOutlineKeyboardOptionKey />
                </div>
              </Key>
            </div>
            <div className="third-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              >
                Cut
              </Key>
              <Key
                isPressed={keyState["w"] || false}
                actions={["w", "*"]}
                mode={currentMode}
              >
                <div>W</div>
                <div>*</div>
              </Key>
              <Key
                isPressed={keyState["s"] || false}
                actions={["s", "["]}
                mode={currentMode}
              >
                <div>S</div>
                <div>[</div>
              </Key>
              <Key
                isPressed={keyState["x"] || false}
                actions={["x"]}
                mode={currentMode}
              >
                X
              </Key>
              <div className="h-2"></div>
            </div>
            <div className="fourth-column grid grid-cols-1 gap-2">
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              >
                Copy
              </Key>
              <Key
                isPressed={keyState["e"] || false}
                actions={["e", "&"]}
                mode={currentMode}
              >
                <div>E</div>
                <div>&</div>
              </Key>
              <Key
                isPressed={keyState["d"] || false}
                actions={["d", "{"]}
                mode={currentMode}
              >
                <div>D</div>
                <div>{"{"}</div>
              </Key>
              <Key
                isPressed={keyState["c"] || false}
                actions={["c"]}
                mode={currentMode}
              >
                C
              </Key>
              <div className="h-4"></div>
            </div>
            <div className="fifth-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              >
                Paste
              </Key>
              <Key
                isPressed={keyState["r"] || false}
                actions={["r", "#"]}
                mode={currentMode}
              >
                <div>R</div>
                <div>#</div>
              </Key>
              <Key
                isPressed={keyState["f"] || false}
                actions={["f", "("]}
                mode={currentMode}
              >
                <div>f</div>
                <div>(</div>
              </Key>
              <Key
                isPressed={keyState["v"] || false}
                actions={["v"]}
                mode={currentMode}
              >
                V
              </Key>
              <div className="h-2"></div>
            </div>
            <div className="sixth-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              >
                Undo
              </Key>
              <Key
                isPressed={keyState["t"] || false}
                actions={["t", "|"]}
                mode={currentMode}
              >
                <div>T</div>
                <div>|</div>
              </Key>
              <Key
                isPressed={keyState["g"] || false}
                actions={["g", "!"]}
                mode={currentMode}
              >
                <div>G</div>
                <div>!</div>
              </Key>
              <Key
                isPressed={keyState["b"] || false}
                actions={["b", "<"]}
                mode={currentMode}
              >
                <div>B</div>
                <div>{"<"}</div>
              </Key>
            </div>
          </div>
        </div>

        {/* ---------------- CENTER CLUSTER ---------------- */}

        <div className="h-full justify-center flex gap-4 flex-col items-center">
          {/* ---------------- VIM LOGO ---------------- */}
          <div className="flex items-center h-full">
            <Image
              src="/images/Vimlogo.svg"
              alt="vim logo"
              layout="contain"
              width={100}
              height={100}
            />
          </div>

          {/* ---------------- MODE INDICATORS ---------------- */}

          <div className="flex gap-4 flex-col">
            <Indicator mode="Normal" currentMode={currentMode} />
            <Indicator mode="Visual" currentMode={currentMode} />
            <Indicator mode="Insert" currentMode={currentMode} />
          </div>
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="right-group">
          <div className="right-group-main flex gap-2">
            <div className="first-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[MAC_KEYS.Escape] || false}
                actions={[MAC_KEYS.Escape]}
                mode={currentMode}
              >
                Esc
              </Key>
              <Key
                isPressed={keyState["y"] || false}
                actions={["y", "~"]}
                mode={currentMode}
              >
                <div>Y</div>
                <div>~</div>
              </Key>
              <Key
                isPressed={keyState["h"] || false}
                actions={["h", "="]}
                mode={currentMode}
              >
                <div>H</div>
                <div>=</div>
              </Key>
              <Key
                isPressed={keyState["n"] || false}
                actions={["n", ">"]}
                mode={currentMode}
              >
                <div>N</div>
                <div>{">"}</div>
              </Key>
            </div>
            <div className="second-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[MAC_KEYS.Delete] || false}
                actions={[MAC_KEYS.Delete]}
                mode={currentMode}
              >
                Del
              </Key>
              <Key
                isPressed={keyState["u"] || false}
                actions={["u", "^"]}
                mode={currentMode}
              >
                <div>U</div>
                <div>^</div>
              </Key>
              <Key
                isPressed={keyState["j"] || false}
                actions={["j", ")"]}
                mode={currentMode}
              >
                <div>J</div>
                <div>)</div>
              </Key>
              <Key
                isPressed={keyState["m"] || false}
                actions={["m", "\\"]}
                mode={currentMode}
              >
                <div>M</div>
                <div>\</div>
              </Key>
            </div>
            <div className="third-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["i"] || false}
                actions={["i", "$"]}
                mode={currentMode}
              >
                <div>I</div>
                <div>$</div>
              </Key>
              <Key
                isPressed={keyState["k"] || false}
                actions={["k", "}"]}
                mode={currentMode}
              >
                <div>K</div>
                <div>{"}"}</div>
              </Key>
              <Key
                isPressed={keyState[","] || false}
                actions={[",", "`"]}
                mode={currentMode}
              >
                <div>,</div>
                <div>`</div>
              </Key>
              <div className="h-2"></div>
            </div>
            <div className="fourth-column grid grid-cols-1 gap-2">
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["o"] || false}
                actions={["o", "%"]}
                mode={currentMode}
              >
                <div>O</div>
                <div>%</div>
              </Key>
              <Key
                isPressed={keyState["l"] || false}
                actions={["l", "]"]}
                mode={currentMode}
              >
                <div>L</div>
                <div>]</div>
              </Key>
              <Key
                isPressed={keyState["."] || false}
                actions={[".", "?"]}
                mode={currentMode}
              >
                <div>.</div>
                <div>?</div>
              </Key>
              <div className="h-4"></div>
            </div>
            <div className="fifth-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["p"] || false}
                actions={["p", "+"]}
                mode={currentMode}
              >
                <div>P</div>
                <div>+</div>
              </Key>
              <Key
                isPressed={keyState[";"] || false}
                actions={[";", ":"]}
                mode={currentMode}
              >
                <div>;</div>
                <div>:</div>
              </Key>
              <Key
                isPressed={keyState[MAC_KEYS.Shift] || false}
                actions={["/", "shift"]}
                mode={currentMode}
              >
                <div>
                  <ImShift />
                </div>
                <div>/</div>
              </Key>
              <div className="h-2"></div>
            </div>
            <div className="sixth-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[""] || false}
                actions={[""]}
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["-"] || false}
                actions={["-", "_"]}
                mode={currentMode}
              >
                <div>-</div>
                <div>_</div>
              </Key>
              <Key
                isPressed={keyState["'"] || false}
                actions={["'", '"']}
                mode={currentMode}
              >
                <div>'</div>
                <div>"</div>
              </Key>
              <Key
                isPressed={keyState[MAC_KEYS.Control] || false}
                actions={[MAC_KEYS.Control]}
                mode={currentMode}
              >
                <ImCtrl />
              </Key>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* ---------------- THUMB CLUSTERS ---------------- */}

        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="left-cluster rotate-[30deg] translate-y-[-40px] flex w-full flex-row">
          <div className="w-full"></div>
          <div className="flex gap-2">
            <Key
              isPressed={keyState[MAC_KEYS.Enter] || false}
              actions={[MAC_KEYS.Enter]}
              mode={currentMode}
            >
              <GrReturn />
            </Key>
            <Key
              isPressed={keyState[MAC_KEYS.Command] || false}
              actions={[MAC_KEYS.Command, MAC_KEYS.Tab]}
              mode={currentMode}
            >
              <div>
                <GrCommand />
              </div>
              <div>Tab</div>
            </Key>
          </div>
        </div>
        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="right-cluster rotate-[-30deg] translate-y-[-40px] flex w-full flex-row">
          <div className="flex gap-2">
            <div className="w-full"></div>
            <Key
              isPressed={keyState[MAC_KEYS.Backspace] || false}
              actions={[MAC_KEYS.Backspace, MAC_KEYS.Shift]}
              mode={currentMode}
            >
              <div>
                {" "}
                <IoBackspaceOutline />
              </div>
              <div>
                <ImShift />
              </div>
            </Key>
            <Key
              isPressed={keyState[MAC_KEYS.Space] || false}
              actions={[MAC_KEYS.Space]}
              mode={currentMode}
            >
              <MdSpaceBar />
            </Key>
          </div>
        </div>
      </div>
    </main>
  );
}
