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
          action={MAC_KEYS.Escape}
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
        <Key isPressed={keyState["`"] || false} action="`" mode={currentMode}>
          <div>~</div>
          <div>`</div>
        </Key>
        <Key isPressed={keyState["1"] || false} action="1" mode={currentMode}>
          <div>!</div>
          <div>1</div>
        </Key>
        <Key isPressed={keyState["2"] || false} action="2" mode={currentMode}>
          <div>@</div>
          <div>2</div>
        </Key>
        <Key isPressed={keyState["3"] || false} action="3" mode={currentMode}>
          <div>#</div>
          <div>3</div>
        </Key>
        <Key isPressed={keyState["4"] || false} action="4" mode={currentMode}>
          <div>$</div>
          <div>4</div>
        </Key>
        <Key isPressed={keyState["5"] || false} action="5" mode={currentMode}>
          <div>%</div>
          <div>5</div>
        </Key>
        <Key isPressed={keyState["6"] || false} action="6" mode={currentMode}>
          <div>^</div>
          <div>6</div>
        </Key>
        <Key isPressed={keyState["7"] || false} action="7" mode={currentMode}>
          <div>&</div>
          <div>7</div>
        </Key>
        <Key isPressed={keyState["8"] || false} action="8" mode={currentMode}>
          <div>*</div>
          <div>8</div>
        </Key>
        <Key isPressed={keyState["9"] || false} action="9" mode={currentMode}>
          <div>(</div>
          <div>9</div>
        </Key>
        <Key isPressed={keyState["0"] || false} action="0" mode={currentMode}>
          <div>)</div>
          <div>0</div>
        </Key>
        <Key isPressed={keyState["-"] || false} action="-" mode={currentMode}>
          <div>_</div>
          <div>-</div>
        </Key>
        <Key isPressed={keyState["="] || false} action="=" mode={currentMode}>
          <div>+</div>
          <div>=</div>
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Backspace] || false}
          action={MAC_KEYS.Backspace}
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
          action={MAC_KEYS.Tab}
          mode={currentMode}
          className="key-onehalf"
        >
          tab
        </Key>
        <Key isPressed={keyState["q"] || false} action="q" mode={currentMode}>
          Q
        </Key>
        <Key isPressed={keyState["w"] || false} action="w" mode={currentMode}>
          W
        </Key>
        <Key isPressed={keyState["e"] || false} action="e" mode={currentMode}>
          E
        </Key>
        <Key isPressed={keyState["r"] || false} action="r" mode={currentMode}>
          R
        </Key>
        <Key isPressed={keyState["t"] || false} action="t" mode={currentMode}>
          T
        </Key>
        <Key isPressed={keyState["y"] || false} action="y" mode={currentMode}>
          Y
        </Key>
        <Key isPressed={keyState["u"] || false} action="u" mode={currentMode}>
          U
        </Key>
        <Key isPressed={keyState["i"] || false} action="i" mode={currentMode}>
          I
        </Key>
        <Key isPressed={keyState["o"] || false} action="o" mode={currentMode}>
          O
        </Key>
        <Key isPressed={keyState["p"] || false} action="p" mode={currentMode}>
          P
        </Key>
        <Key isPressed={keyState["["] || false} action="[" mode={currentMode}>
          <div>{"{"}</div>
          <div>[</div>
        </Key>
        <Key isPressed={keyState["]"] || false} action="]" mode={currentMode}>
          <div>{"}"}</div>
          <div>]</div>
        </Key>
        <Key isPressed={keyState["\\"] || false} action="\\" mode={currentMode}>
          <div>|</div>
          <div>\</div>
        </Key>
      </div>
      {/* ---------------- FOURTH ROW ---------------- */}
      <div className="top-row justify-between gap-2 flex">
        <Key
          isPressed={keyState[MAC_KEYS.CapsLock] || false}
          action={MAC_KEYS.CapsLock}
          mode={currentMode}
          className="key-threequarter"
        >
          caps
        </Key>
        <Key isPressed={keyState["a"] || false} action="a" mode={currentMode}>
          A
        </Key>
        <Key isPressed={keyState["s"] || false} action="s" mode={currentMode}>
          S
        </Key>
        <Key isPressed={keyState["d"] || false} action="d" mode={currentMode}>
          D
        </Key>
        <Key isPressed={keyState["f"] || false} action="f" mode={currentMode}>
          F
        </Key>
        <Key isPressed={keyState["g"] || false} action="g" mode={currentMode}>
          G
        </Key>
        <Key isPressed={keyState["h"] || false} action="h" mode={currentMode}>
          H
        </Key>
        <Key isPressed={keyState["j"] || false} action="j" mode={currentMode}>
          J
        </Key>
        <Key isPressed={keyState["k"] || false} action="k" mode={currentMode}>
          K
        </Key>
        <Key isPressed={keyState["l"] || false} action="l" mode={currentMode}>
          L
        </Key>
        <Key isPressed={keyState[";"] || false} action=";" mode={currentMode}>
          <div>:</div>
          <div>;</div>
        </Key>
        <Key isPressed={keyState["'"] || false} action="'" mode={currentMode}>
          <div>"</div>
          <div>'</div>
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Enter] || false}
          action={MAC_KEYS.Enter}
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
          action={MAC_KEYS.Shift}
          mode={currentMode}
          className="key-shift"
        >
          shift
        </Key>
        <Key isPressed={keyState["z"] || false} action="z" mode={currentMode}>
          Z
        </Key>
        <Key isPressed={keyState["x"] || false} action="x" mode={currentMode}>
          X
        </Key>
        <Key isPressed={keyState["c"] || false} action="c" mode={currentMode}>
          C
        </Key>
        <Key isPressed={keyState["v"] || false} action="v" mode={currentMode}>
          V
        </Key>
        <Key isPressed={keyState["b"] || false} action="b" mode={currentMode}>
          B
        </Key>
        <Key isPressed={keyState["n"] || false} action="n" mode={currentMode}>
          N
        </Key>
        <Key isPressed={keyState["m"] || false} action="m" mode={currentMode}>
          M
        </Key>
        <Key isPressed={keyState[","] || false} action="," mode={currentMode}>
          <div>{"<"}</div>
          <div>,</div>
        </Key>
        <Key isPressed={keyState["."] || false} action="." mode={currentMode}>
          <div>{">"}</div>
          <div>.</div>
        </Key>
        <Key isPressed={keyState["/"] || false} action="/" mode={currentMode}>
          <div>?</div>
          <div>/</div>
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Shift] || false}
          action={MAC_KEYS.Shift}
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
          action="function"
          mode={currentMode}
        >
          fn
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Control] || false}
          action={MAC_KEYS.Control}
          mode={currentMode}
        >
          <ImCtrl />
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Option] || false}
          action={MAC_KEYS.Option}
          mode={currentMode}
        >
          <PiOptionBold />
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Command] || false}
          action={MAC_KEYS.Command}
          mode={currentMode}
        >
          <GrCommand />
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Space] || false}
          action={MAC_KEYS.Space}
          mode={currentMode}
          className="key-space"
        >
          space
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Control] || false}
          action={MAC_KEYS.Control}
          mode={currentMode}
        >
          <PiOptionBold />
        </Key>
        <Key
          isPressed={keyState[MAC_KEYS.Option] || false}
          action={MAC_KEYS.Option}
          mode={currentMode}
        >
          <GrCommand />
        </Key>
        <div className="flex gap-2 items-end">
          <Key
            isPressed={keyState[MAC_KEYS.ArrowLeft] || false}
            action={MAC_KEYS.ArrowLeft}
            mode={currentMode}
            className="key-arrow"
          >
            <MdArrowLeft />
          </Key>
          <div className="flex flex-col gap-2">
            <Key
              isPressed={keyState[MAC_KEYS.ArrowUp] || false}
              action={MAC_KEYS.ArrowUp}
              mode={currentMode}
              className="key-arrow"
            >
              <MdArrowDropUp />
            </Key>
            <Key
              isPressed={keyState[MAC_KEYS.ArrowDown] || false}
              action={MAC_KEYS.ArrowDown}
              mode={currentMode}
              className="key-arrow"
            >
              <MdArrowDropUp />
            </Key>
          </div>
          <Key
            isPressed={keyState[MAC_KEYS.ArrowRight] || false}
            action={MAC_KEYS.ArrowRight}
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
