"use client";

import Key from "./Key";
import { GrCommand } from "react-icons/gr";
import { ImShift } from "react-icons/im";
import { IoBackspaceOutline } from "react-icons/io5";
import { BsCapslock } from "react-icons/bs";
import { ImCtrl } from "react-icons/im";
import { MdSpaceBar } from "react-icons/md";
import { GrReturn } from "react-icons/gr";
import { useState } from "react";
import Image from "next/image";
import Indicator from "./Indicators";
import { useMode } from "../utils/ModeContext";
import { MAC_KEYS } from "../utils/constants";
import { useKeyHandler } from "../utils/useKeyHandlers";

type KeyState = Record<string, boolean>;

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
                action={MAC_KEYS.CapsLock}
                mode={currentMode}
              >
                <BsCapslock />
              </Key>
              <Key
                isPressed={keyState[""] || false}
                action=""
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState[MAC_KEYS.Control] || false}
                action={MAC_KEYS.Control}
                mode={currentMode}
              >
                <ImCtrl />
              </Key>
              <Key
                isPressed={keyState[MAC_KEYS.Shift] || false}
                action={MAC_KEYS.Shift}
                mode={currentMode}
              >
                <ImShift />
              </Key>
            </div>
            <div className="second-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[""] || false}
                action=""
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["q"] || false}
                action="q"
                mode={currentMode}
              >
                Q
              </Key>
              <Key
                isPressed={keyState["a"] || false}
                action="a"
                mode={currentMode}
              >
                A
              </Key>
              <Key
                isPressed={keyState["z"] || false}
                action="z"
                mode={currentMode}
              >
                Z
              </Key>
            </div>
            <div className="third-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                isPressed={keyState[""] || false}
                action=""
                mode={currentMode}
              >
                Cut
              </Key>
              <Key
                isPressed={keyState["w"] || false}
                action="w"
                mode={currentMode}
              >
                W
              </Key>
              <Key
                isPressed={keyState["s"] || false}
                action="s"
                mode={currentMode}
              >
                S
              </Key>
              <Key
                isPressed={keyState["x"] || false}
                action="x"
                mode={currentMode}
              >
                X
              </Key>
              <div className="h-2"></div>
            </div>
            <div className="fourth-column grid grid-cols-1 gap-2">
              <Key
                isPressed={keyState[""] || false}
                action=""
                mode={currentMode}
              >
                Copy
              </Key>
              <Key
                isPressed={keyState["e"] || false}
                action="e"
                mode={currentMode}
              >
                E
              </Key>
              <Key
                isPressed={keyState["d"] || false}
                action="d"
                mode={currentMode}
              >
                D
              </Key>
              <Key
                isPressed={keyState["c"] || false}
                action="c"
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
                action=""
                mode={currentMode}
              >
                Paste
              </Key>
              <Key
                isPressed={keyState["r"] || false}
                action="r"
                mode={currentMode}
              >
                R
              </Key>
              <Key
                isPressed={keyState["f"] || false}
                action="f"
                mode={currentMode}
              >
                F
              </Key>
              <Key
                isPressed={keyState["v"] || false}
                action="v"
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
                action=""
                mode={currentMode}
              >
                Undo
              </Key>
              <Key
                isPressed={keyState["t"] || false}
                action="t"
                mode={currentMode}
              >
                T
              </Key>
              <Key
                isPressed={keyState["g"] || false}
                action="g"
                mode={currentMode}
              >
                G
              </Key>
              <Key
                isPressed={keyState["b"] || false}
                action="b"
                mode={currentMode}
              >
                B
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
                action={MAC_KEYS.Escape}
                mode={currentMode}
              >
                Esc
              </Key>
              <Key
                isPressed={keyState["y"] || false}
                action="y"
                mode={currentMode}
              >
                Y
              </Key>
              <Key
                isPressed={keyState["h"] || false}
                action="h"
                mode={currentMode}
              >
                H
              </Key>
              <Key
                isPressed={keyState["n"] || false}
                action="n"
                mode={currentMode}
              >
                N
              </Key>
            </div>
            <div className="second-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[MAC_KEYS.Delete] || false}
                action={MAC_KEYS.Delete}
                mode={currentMode}
              >
                Del
              </Key>
              <Key
                isPressed={keyState["u"] || false}
                action="u"
                mode={currentMode}
              >
                U
              </Key>
              <Key
                isPressed={keyState["j"] || false}
                action="j"
                mode={currentMode}
              >
                J
              </Key>
              <Key
                isPressed={keyState["m"] || false}
                action="m"
                mode={currentMode}
              >
                M
              </Key>
            </div>
            <div className="third-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                isPressed={keyState[""] || false}
                action=""
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["i"] || false}
                action="i"
                mode={currentMode}
              >
                I
              </Key>
              <Key
                isPressed={keyState["k"] || false}
                action="k"
                mode={currentMode}
              >
                K
              </Key>
              <Key
                isPressed={keyState[","] || false}
                action=","
                mode={currentMode}
              >
                ,
              </Key>
              <div className="h-2"></div>
            </div>
            <div className="fourth-column grid grid-cols-1 gap-2">
              <Key
                isPressed={keyState[""] || false}
                action=""
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["o"] || false}
                action="o"
                mode={currentMode}
              >
                O
              </Key>
              <Key
                isPressed={keyState["l"] || false}
                action="l"
                mode={currentMode}
              >
                L
              </Key>
              <Key
                isPressed={keyState["."] || false}
                action="."
                mode={currentMode}
              >
                .
              </Key>
              <div className="h-4"></div>
            </div>
            <div className="fifth-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                isPressed={keyState[""] || false}
                action=""
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["p"] || false}
                action="p"
                mode={currentMode}
              >
                P
              </Key>
              <Key
                isPressed={keyState[";"] || false}
                action=";"
                mode={currentMode}
              >
                ;
              </Key>
              <Key
                isPressed={keyState[MAC_KEYS.Shift] || false}
                action=""
                mode={currentMode}
              >
                <ImShift />
              </Key>
              <div className="h-2"></div>
            </div>
            <div className="sixth-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                isPressed={keyState[""] || false}
                action=""
                mode={currentMode}
              ></Key>
              <Key
                isPressed={keyState["-"] || false}
                action="-"
                mode={currentMode}
              >
                -
              </Key>
              <Key
                isPressed={keyState["'"] || false}
                action="'"
                mode={currentMode}
              >
                '
              </Key>
              <Key
                isPressed={keyState[MAC_KEYS.Control] || false}
                action={MAC_KEYS.Control}
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
              action={MAC_KEYS.Enter}
              mode={currentMode}
            >
              <GrReturn />
            </Key>
            <Key
              isPressed={keyState[MAC_KEYS.Command] || false}
              action={MAC_KEYS.Command}
              mode={currentMode}
            >
              <GrCommand />
            </Key>
          </div>
        </div>
        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="right-cluster rotate-[-30deg] translate-y-[-40px] flex w-full flex-row">
          <div className="flex gap-2">
            <div className="w-full"></div>
            <Key
              isPressed={keyState[MAC_KEYS.Backspace] || false}
              action={MAC_KEYS.Backspace}
              mode={currentMode}
            >
              <IoBackspaceOutline />
            </Key>
            <Key
              isPressed={keyState[MAC_KEYS.Space] || false}
              action={MAC_KEYS.Space}
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
