"use client";

import Key from "./Key";
import { GrCommand } from "react-icons/gr";
import { PiOptionBold } from "react-icons/pi";
import { ImCtrl } from "react-icons/im";
import { useState } from "react";
import Image from "next/image";
import Indicator from "./Indicators";
import { useMode } from "../utils/ModeContext";
import { MAC_KEYS } from "../utils/constants";
import { useKeyHandler } from "../utils/useKeyHandlers";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

type KeyState = Record<string, boolean>;

export default function MBP() {
  const { currentMode, setCurrentMode } = useMode();
  const [keyState, setKeyState] = useState<KeyState>({});

  useKeyHandler(setCurrentMode, currentMode, setKeyState);

  return (
    <main className="flex flex-col justify-start gap-2 items-center min-w-[925px]">
      {/* ---------------- FIRST ROW ---------------- */}
      <div className="top-row w-full justify-between flex">
        <Key
          isPressed={keyState[MAC_KEYS.Escape] || false}
          actions={[MAC_KEYS.Escape]}
          mode={currentMode}
        >
          Esc
        </Key>
        <div className="flex gap-4 items-center">
          <div className="flex h-8 gap-4">
            <Indicator mode="Normal" currentMode={currentMode} />
            <Indicator mode="Visual" currentMode={currentMode} />
            <Indicator mode="Insert" currentMode={currentMode} />
          </div>
          <Image
            src="/images/Vimlogo.svg"
            alt="vim logo"
            height={50}
            width={50}
          />
        </div>
      </div>
      {/* ---------------- SECOND ROW ---------------- */}
      <div className="top-row justify-between gap-2 flex">
        <Key
          isPressed={keyState["`"] || false}
          actions={["`", "~"]}
          mode={currentMode}
        >
          <div>~</div>
          <div>`</div>
        </Key>
        <Key
          isPressed={keyState["1"] || false}
          actions={["1", "!"]}
          mode={currentMode}
        >
          <div>!</div>
          <div>1</div>
        </Key>
        <Key
          isPressed={keyState["2"] || false}
          actions={["2", "@"]}
          mode={currentMode}
        >
          <div>@</div>
          <div>2</div>
        </Key>
        <Key
          isPressed={keyState["3"] || false}
          actions={["3", "#"]}
          mode={currentMode}
        >
          <div>#</div>
          <div>3</div>
        </Key>
        <Key
          isPressed={keyState["4"] || false}
          actions={["4", "$"]}
          mode={currentMode}
        >
          <div>$</div>
          <div>4</div>
        </Key>
        <Key
          isPressed={keyState["5"] || false}
          actions={["5", "%"]}
          mode={currentMode}
        >
          <div>%</div>
          <div>5</div>
        </Key>
        <Key
          isPressed={keyState["6"] || false}
          actions={["6", "^"]}
          mode={currentMode}
        >
          <div>^</div>
          <div>6</div>
        </Key>
        <Key
          isPressed={keyState["7"] || false}
          actions={["7", "&"]}
          mode={currentMode}
        >
          <div>&</div>
          <div>7</div>
        </Key>
        <Key
          isPressed={keyState["8"] || false}
          actions={["8", "*"]}
          mode={currentMode}
        >
          <div>*</div>
          <div>8</div>
        </Key>
        <Key
          isPressed={keyState["9"] || false}
          actions={["9", "("]}
          mode={currentMode}
        >
          <div>(</div>
          <div>9</div>
        </Key>
        <Key
          isPressed={keyState["0"] || false}
          actions={["0", ")"]}
          mode={currentMode}
        >
          <div>)</div>
          <div>0</div>
        </Key>
        <Key
          isPressed={keyState["-"] || false}
          actions={["-", "_"]}
          mode={currentMode}
        >
          <div>_</div>
          <div>-</div>
        </Key>
        <Key
          isPressed={keyState["="] || false}
          actions={["=", "+"]}
          mode={currentMode}
        >
          <div>+</div>
          <div>=</div>
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Backspace] || false}
          actions={[MAC_KEYS.Backspace]}
          mode={currentMode}
          className="key-onehalf"
        >
          delete
        </Key>
      </div>
      {/* ---------------- THIRD ROW ---------------- */}
      <div className="top-row justify-between gap-2 flex">
        <Key
          isPressed={keyState[MAC_KEYS.Tab] || false}
          actions={[MAC_KEYS.Tab]}
          mode={currentMode}
          className="key-onehalf"
        >
          tab
        </Key>
        <Key
          isPressed={keyState["q"] || false}
          actions={["q"]}
          mode={currentMode}
        >
          Q
        </Key>
        <Key
          isPressed={keyState["w"] || false}
          actions={["w"]}
          mode={currentMode}
        >
          W
        </Key>
        <Key
          isPressed={keyState["e"] || false}
          actions={["e"]}
          mode={currentMode}
        >
          E
        </Key>
        <Key
          isPressed={keyState["r"] || false}
          actions={["r"]}
          mode={currentMode}
        >
          R
        </Key>
        <Key
          isPressed={keyState["t"] || false}
          actions={["t"]}
          mode={currentMode}
        >
          T
        </Key>
        <Key
          isPressed={keyState["y"] || false}
          actions={["y"]}
          mode={currentMode}
        >
          Y
        </Key>
        <Key
          isPressed={keyState["u"] || false}
          actions={["u"]}
          mode={currentMode}
        >
          U
        </Key>
        <Key
          isPressed={keyState["i"] || false}
          actions={["i"]}
          mode={currentMode}
        >
          I
        </Key>
        <Key
          isPressed={keyState["o"] || false}
          actions={["o"]}
          mode={currentMode}
        >
          O
        </Key>
        <Key
          isPressed={keyState["p"] || false}
          actions={["p"]}
          mode={currentMode}
        >
          P
        </Key>
        <Key
          isPressed={keyState["["] || false}
          actions={["[", "{"]}
          mode={currentMode}
        >
          <div>{"{"}</div>
          <div>[</div>
        </Key>
        <Key
          isPressed={keyState["]"] || false}
          actions={["]", "}"]}
          mode={currentMode}
        >
          <div>{"}"}</div>
          <div>]</div>
        </Key>
        <Key
          isPressed={keyState["\\"] || false}
          actions={["\\", "|"]}
          mode={currentMode}
        >
          <div>|</div>
          <div>\</div>
        </Key>
      </div>
      {/* ---------------- FOURTH ROW ---------------- */}
      <div className="top-row justify-between gap-2 flex">
        <Key
          isPressed={keyState[MAC_KEYS.CapsLock] || false}
          actions={[MAC_KEYS.CapsLock]}
          mode={currentMode}
          className="key-threequarter"
        >
          caps
        </Key>
        <Key
          isPressed={keyState["a"] || false}
          actions={["a"]}
          mode={currentMode}
        >
          A
        </Key>
        <Key
          isPressed={keyState["s"] || false}
          actions={["s"]}
          mode={currentMode}
        >
          S
        </Key>
        <Key
          isPressed={keyState["d"] || false}
          actions={["d"]}
          mode={currentMode}
        >
          D
        </Key>
        <Key
          isPressed={keyState["f"] || false}
          actions={["f"]}
          mode={currentMode}
        >
          F
        </Key>
        <Key
          isPressed={keyState["g"] || false}
          actions={["g"]}
          mode={currentMode}
        >
          G
        </Key>
        <Key
          isPressed={keyState["h"] || false}
          actions={["h"]}
          mode={currentMode}
        >
          H
        </Key>
        <Key
          isPressed={keyState["j"] || false}
          actions={["j"]}
          mode={currentMode}
        >
          J
        </Key>
        <Key
          isPressed={keyState["k"] || false}
          actions={["k"]}
          mode={currentMode}
        >
          K
        </Key>
        <Key
          isPressed={keyState["l"] || false}
          actions={["l"]}
          mode={currentMode}
        >
          L
        </Key>
        <Key
          isPressed={keyState[";"] || false}
          actions={[":", ":"]}
          mode={currentMode}
        >
          <div>:</div>
          <div>;</div>
        </Key>
        <Key
          isPressed={keyState["'"] || false}
          actions={["'", '"']}
          mode={currentMode}
        >
          <div>"</div>
          <div>'</div>
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Enter] || false}
          actions={[MAC_KEYS.Enter]}
          mode={currentMode}
          className="key-threequarter"
        >
          return
        </Key>
      </div>
      {/* ---------------- FIFTH ROW ---------------- */}
      <div className="top-row justify-between gap-2 flex">
        <Key
          isPressed={keyState[MAC_KEYS.Shift] || false}
          actions={[MAC_KEYS.Shift]}
          mode={currentMode}
          className="key-shift"
        >
          shift
        </Key>
        <Key
          isPressed={keyState["z"] || false}
          actions={["z"]}
          mode={currentMode}
        >
          Z
        </Key>
        <Key
          isPressed={keyState["x"] || false}
          actions={["x"]}
          mode={currentMode}
        >
          X
        </Key>
        <Key
          isPressed={keyState["c"] || false}
          actions={["c"]}
          mode={currentMode}
        >
          C
        </Key>
        <Key
          isPressed={keyState["v"] || false}
          actions={["v"]}
          mode={currentMode}
        >
          V
        </Key>
        <Key
          isPressed={keyState["b"] || false}
          actions={["b"]}
          mode={currentMode}
        >
          B
        </Key>
        <Key
          isPressed={keyState["n"] || false}
          actions={["n"]}
          mode={currentMode}
        >
          N
        </Key>
        <Key
          isPressed={keyState["m"] || false}
          actions={["m"]}
          mode={currentMode}
        >
          M
        </Key>
        <Key
          isPressed={keyState[","] || false}
          actions={[",", "<"]}
          mode={currentMode}
        >
          <div>{"<"}</div>
          <div>,</div>
        </Key>
        <Key
          isPressed={keyState["."] || false}
          actions={[".", ">"]}
          mode={currentMode}
        >
          <div>{">"}</div>
          <div>.</div>
        </Key>
        <Key
          isPressed={keyState["/"] || false}
          actions={["/", "?"]}
          mode={currentMode}
        >
          <div>?</div>
          <div>/</div>
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Shift] || false}
          actions={[MAC_KEYS.Shift]}
          mode={currentMode}
          className="key-shift"
        >
          shift
        </Key>
      </div>
      {/* ---------------- SIXTH ROW ---------------- */}
      <div className="top-row justify-between gap-2 flex">
        <Key
          isPressed={keyState["function"] || false}
          actions={["function"]}
          mode={currentMode}
        >
          fn
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Control] || false}
          actions={[MAC_KEYS.Control]}
          mode={currentMode}
        >
          <ImCtrl />
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Option] || false}
          actions={[MAC_KEYS.Option]}
          mode={currentMode}
        >
          <PiOptionBold />
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Command] || false}
          actions={[MAC_KEYS.Command]}
          mode={currentMode}
        >
          <GrCommand />
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Space] || false}
          actions={[MAC_KEYS.Space]}
          mode={currentMode}
          className="key-space"
        >
          space
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Control] || false}
          actions={[MAC_KEYS.Control]}
          mode={currentMode}
        >
          <PiOptionBold />
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Option] || false}
          actions={[MAC_KEYS.Option]}
          mode={currentMode}
        >
          <GrCommand />
        </Key>
        <div className="flex gap-2 items-end">
          <Key
            isPressed={keyState[MAC_KEYS.ArrowLeft] || false}
            actions={[MAC_KEYS.ArrowLeft]}
            mode={currentMode}
            className="key-arrow"
          >
            <MdArrowLeft />
          </Key>
          <div className="flex flex-col gap-2">
            <Key
              isPressed={keyState[MAC_KEYS.ArrowUp] || false}
              actions={[MAC_KEYS.ArrowUp]}
              mode={currentMode}
              className="key-arrow"
            >
              <MdArrowDropUp />
            </Key>
            <Key
              isPressed={keyState[MAC_KEYS.ArrowDown] || false}
              actions={[MAC_KEYS.ArrowDown]}
              mode={currentMode}
              className="key-arrow"
            >
              <MdArrowDropUp />
            </Key>
          </div>
          <Key
            isPressed={keyState[MAC_KEYS.ArrowRight] || false}
            actions={[MAC_KEYS.ArrowRight]}
            mode={currentMode}
            className="key-arrow"
          >
            <MdArrowRight />
          </Key>
        </div>
      </div>
    </main>
  );
}
