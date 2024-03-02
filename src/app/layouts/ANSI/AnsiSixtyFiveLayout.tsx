import Image from "next/image";
import { useState } from "react";
import { useMode } from "@/app/utils/ModeContext";
import { KeyConfig } from "@/app/utils/types";
import { useKeyHandler } from "@/app/utils/useKeyHandlers";

import Key from "@/app/components/Key";
import Indicator from "@/app/components/Indicators";

interface AnsiSixtyFiveLayoutProps {
  keymap: Record<string, KeyConfig>;
}

export default function AnsiSixtyFiveLayout({ keymap = {} }: AnsiSixtyFiveLayoutProps) {
  const { currentMode, setCurrentMode } = useMode();
  const [keyState, setKeyState] = useState<Record<string, boolean>>({});

  useKeyHandler(setCurrentMode, currentMode, setKeyState);

  console.log(keymap);

  return (
    <main className="flex justify-center flex-col gap-1 min-w-full">
      {/* ----- UPPER Row ----- */}
      <div className="keyboard-row gap-1 justify-end w-full flex">
        {/* ----- Indicators and Vim logo ----- */}
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
      {/* ----- First Row ----- */}
      <div className="keyboard-row gap-1 flex">
        <Key
          {...(keymap["DANCE_01"] || {})}
          isPressed={
            keymap["DANCE_01"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_02"] || {})}
          isPressed={
            keymap["DANCE_02"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_03"] || {})}
          isPressed={
            keymap["DANCE_03"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_04"] || {})}
          isPressed={
            keymap["DANCE_04"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_05"] || {})}
          isPressed={
            keymap["DANCE_05"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_06"] || {})}
          isPressed={
            keymap["DANCE_06"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_07"] || {})}
          isPressed={
            keymap["DANCE_07"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_08"] || {})}
          isPressed={
            keymap["DANCE_08"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_09"] || {})}
          isPressed={
            keymap["DANCE_09"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_0A"] || {})}
          isPressed={
            keymap["DANCE_0A"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_0B"] || {})}
          isPressed={
            keymap["DANCE_0B"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_0C"] || {})}
          isPressed={
            keymap["DANCE_0C"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_0D"] || {})}
          isPressed={
            keymap["DANCE_0D"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_0E"] || {})}
          isPressed={
            keymap["DANCE_0E"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-backspace"
        />
        <Key
          {...(keymap["DANCE_0F"] || {})}
          isPressed={
            keymap["DANCE_0F"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
      </div>

      {/* ----- Second Row ----- */}

      <div className="keyboard-row gap-1 flex">
        <Key
          {...(keymap["DANCE_10"] || {})}
          isPressed={
            keymap["DANCE_10"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-tab"
        />
        <Key
          {...(keymap["DANCE_11"] || {})}
          isPressed={
            keymap["DANCE_11"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_12"] || {})}
          isPressed={
            keymap["DANCE_12"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_13"] || {})}
          isPressed={
            keymap["DANCE_13"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_14"] || {})}
          isPressed={
            keymap["DANCE_14"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_15"] || {})}
          isPressed={
            keymap["DANCE_15"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_16"] || {})}
          isPressed={
            keymap["DANCE_16"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_17"] || {})}
          isPressed={
            keymap["DANCE_17"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_18"] || {})}
          isPressed={
            keymap["DANCE_18"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_19"] || {})}
          isPressed={
            keymap["DANCE_19"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_1A"] || {})}
          isPressed={
            keymap["DANCE_1A"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_1B"] || {})}
          isPressed={
            keymap["DANCE_1B"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_1C"] || {})}
          isPressed={
            keymap["DANCE_1C"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_1D"] || {})}
          isPressed={
            keymap["DANCE_1D"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-tab"
        />
        <Key
          {...(keymap["DANCE_1E"] || {})}
          isPressed={
            keymap["DANCE_1E"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
      </div>

      {/* ----- Third Row ----- */}
      <div className="keyboard-row gap-1 flex">
        <Key
          {...(keymap["DANCE_20"] || {})}
          isPressed={
            keymap["DANCE_20"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-caps"
        />
        <Key
          {...(keymap["DANCE_21"] || {})}
          isPressed={
            keymap["DANCE_21"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_22"] || {})}
          isPressed={
            keymap["DANCE_22"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_23"] || {})}
          isPressed={
            keymap["DANCE_23"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_24"] || {})}
          isPressed={
            keymap["DANCE_24"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_25"] || {})}
          isPressed={
            keymap["DANCE_25"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_26"] || {})}
          isPressed={
            keymap["DANCE_26"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_27"] || {})}
          isPressed={
            keymap["DANCE_27"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_28"] || {})}
          isPressed={
            keymap["DANCE_28"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_29"] || {})}
          isPressed={
            keymap["DANCE_29"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_2A"] || {})}
          isPressed={
            keymap["DANCE_2A"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_2B"] || {})}
          isPressed={
            keymap["DANCE_2B"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_2C"] || {})}
          isPressed={
            keymap["DANCE_2C"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-return"
        />
        <Key
          {...(keymap["DANCE_2D"] || {})}
          isPressed={
            keymap["DANCE_2D"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
      </div>

      {/* ----- Fourth Row ----- */}
      <div className="keyboard-row gap-1 flex">
        <Key
          {...(keymap["DANCE_30"] || {})}
          isPressed={
            keymap["DANCE_30"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-shift"
        />
        <Key
          {...(keymap["DANCE_31"] || {})}
          isPressed={
            keymap["DANCE_31"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_32"] || {})}
          isPressed={
            keymap["DANCE_32"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_33"] || {})}
          isPressed={
            keymap["DANCE_33"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_34"] || {})}
          isPressed={
            keymap["DANCE_34"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_35"] || {})}
          isPressed={
            keymap["DANCE_35"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_36"] || {})}
          isPressed={
            keymap["DANCE_36"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_37"] || {})}
          isPressed={
            keymap["DANCE_37"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_38"] || {})}
          isPressed={
            keymap["DANCE_38"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_39"] || {})}
          isPressed={
            keymap["DANCE_39"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_3A"] || {})}
          isPressed={
            keymap["DANCE_3A"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_3B"] || {})}
          isPressed={
            keymap["DANCE_3B"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-tab"
        />
        <Key
          {...(keymap["DANCE_3C"] || {})}
          isPressed={
            keymap["DANCE_3C"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_3D"] || {})}
          isPressed={
            keymap["DANCE_3D"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
      </div>

      {/* ----- Fifth Row ----- */}
      <div className="keyboard-row gap-1 flex">
        <Key
          {...(keymap["DANCE_40"] || {})}
          isPressed={
            keymap["DANCE_40"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-meta"
        />
        <Key
          {...(keymap["DANCE_41"] || {})}
          isPressed={
            keymap["DANCE_41"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-meta"
        />
        <Key
          {...(keymap["DANCE_42"] || {})}
          isPressed={
            keymap["DANCE_42"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-meta"
        />
        <Key
          {...(keymap["DANCE_43"] || {})}
          isPressed={
            keymap["DANCE_43"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode} className="key-sf-space"
        />
        <Key
          {...(keymap["DANCE_44"] || {})}
          isPressed={
            keymap["DANCE_44"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_45"] || {})}
          isPressed={
            keymap["DANCE_45"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_46"] || {})}
          isPressed={
            keymap["DANCE_46"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_47"] || {})}
          isPressed={
            keymap["DANCE_47"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />             <Key
          {...(keymap["DANCE_48"] || {})}
          isPressed={
            keymap["DANCE_48"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
        <Key
          {...(keymap["DANCE_49"] || {})}
          isPressed={
            keymap["DANCE_49"]?.actions.some((action) => keyState[action]) ||
            false
          } mode={currentMode}
        />
      </div>
    </main>
  );
}