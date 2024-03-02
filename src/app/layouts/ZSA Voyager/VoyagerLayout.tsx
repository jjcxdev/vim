import Image from "next/image";
import { useState } from "react";
import { useMode } from "@/app/utils/ModeContext";
import { KeyConfig } from "@/app/utils/types";
import { useKeyHandler } from "@/app/utils/useKeyHandlers";
import { KeyState } from "@/app/utils/useKeyHandlers";
import { Mode } from "@/app/utils/useKeyHandlers";

import Key from "@/app/components/Key";
import Indicator from "@/app/components/Indicators";

interface VoyagerLayoutProps {
  keymap: Record<string, KeyConfig>;
  keyState: KeyState;
  currentMode: Mode;
}

export default function VoyagerLayout({ keymap = {} }: VoyagerLayoutProps) {
  const { currentMode, setCurrentMode } = useMode();
  const [keyState, setKeyState] = useState<Record<string, boolean>>({});

  useKeyHandler(setCurrentMode, currentMode, setKeyState);

  return (
    <main className="flex pb-8 flex-col min-w-full">
      <div className="flex pt-4 justify-between flex-row">
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="left-group">
          <div className="left-group-main flex gap-2">
            <div className="first-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                {...(keymap["DANCE_00"] || {})}
                isPressed={
                  keymap["DANCE_00"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <Key
                {...(keymap["DANCE_10"] || {})}
                isPressed={
                  keymap["DANCE_10"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <Key
                {...(keymap["DANCE_20"] || {})}
                isPressed={
                  keymap["DANCE_20"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <Key
                {...(keymap["DANCE_30"] || {})}
                isPressed={
                  keymap["DANCE_30"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
            </div>
            <div className="second-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                {...(keymap["DANCE_01"] || {})}
                isPressed={
                  keymap["DANCE_01"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <Key
                {...(keymap["DANCE_11"] || {})}
                isPressed={
                  keymap["DANCE_11"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <Key
                {...(keymap["DANCE_21"] || {})}
                isPressed={
                  keymap["DANCE_21"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <Key
                {...(keymap["DANCE_31"] || {})}
                isPressed={
                  keymap["DANCE_31"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
            </div>
            <div className="third-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                {...(keymap["DANCE_02"] || {})}
                isPressed={
                  keymap["DANCE_02"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_22"] || {})}
                isPressed={
                  keymap["DANCE_22"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <Key
                {...(keymap["DANCE_32"] || {})}
                isPressed={
                  keymap["DANCE_23"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <div className="h-2"></div>
            </div>
            <div className="fourth-column grid grid-cols-1 gap-2">
              <Key
                {...(keymap["DANCE_03"] || {})}
                isPressed={
                  keymap["DANCE_03"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_23"] || {})}
                isPressed={
                  keymap["DANCE_23"]?.actions.some((action) => keyState[action]) ||
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
              <div className="h-4"></div>
            </div>
            <div className="fifth-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                {...(keymap["DANCE_04"] || {})}
                isPressed={
                  keymap["DANCE_04"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_24"] || {})}
                isPressed={
                  keymap["DANCE_24"]?.actions.some((action) => keyState[action]) ||
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
              <div className="h-2"></div>
            </div>
            <div className="sixth-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                {...(keymap["DANCE_05"] || {})}
                isPressed={
                  keymap["DANCE_05"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_25"] || {})}
                isPressed={
                  keymap["DANCE_25"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_06"] || {})}
                isPressed={
                  keymap["DANCE_06"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_26"] || {})}
                isPressed={
                  keymap["DANCE_26"]?.actions.some((action) => keyState[action]) ||
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
            </div>
            <div className="second-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                {...(keymap["DANCE_07"] || {})}
                isPressed={
                  keymap["DANCE_07"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_27"] || {})}
                isPressed={
                  keymap["DANCE_27"]?.actions.some((action) => keyState[action]) ||
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
            </div>
            <div className="third-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                {...(keymap["DANCE_08"] || {})}
                isPressed={
                  keymap["DANCE_08"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_28"] || {})}
                isPressed={
                  keymap["DANCE_28"]?.actions.some((action) => keyState[action]) ||
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
              <div className="h-2"></div>
            </div>
            <div className="fourth-column grid grid-cols-1 gap-2">
              <Key
                {...(keymap["DANCE_09"] || {})}
                isPressed={
                  keymap["DANCE_09"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_29"] || {})}
                isPressed={
                  keymap["DANCE_29"]?.actions.some((action) => keyState[action]) ||
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
              <div className="h-4"></div>
            </div>
            <div className="fifth-column grid grid-cols-1 gap-2">
              <div className="h-2"></div>
              <Key
                {...(keymap["DANCE_0A"] || {})}
                isPressed={
                  keymap["DANCE_0A"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_2A"] || {})}
                isPressed={
                  keymap["DANCE_2A"]?.actions.some((action) => keyState[action]) ||
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
              <div className="h-2"></div>
            </div>
            <div className="sixth-column grid grid-cols-1 gap-2">
              <div className="h-4"></div>
              <Key
                {...(keymap["DANCE_0B"] || {})}
                isPressed={
                  keymap["DANCE_0B"]?.actions.some((action) => keyState[action]) ||
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
                {...(keymap["DANCE_2B"] || {})}
                isPressed={
                  keymap["DANCE_2B"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
              <Key
                {...(keymap["DANCE_3B"] || {})}
                isPressed={
                  keymap["DANCE_3B"]?.actions.some((action) => keyState[action]) ||
                  false
                } mode={currentMode}
              />
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
              {...(keymap["DANCE_40"] || {})}
              isPressed={
                keymap["DANCE_40"]?.actions.some((action) => keyState[action]) ||
                false
              } mode={currentMode}
            />
            <Key
              {...(keymap["DANCE_41"] || {})}
              isPressed={
                keymap["DANCE_41"]?.actions.some((action) => keyState[action]) ||
                false
              } mode={currentMode}
            />
          </div>
        </div>
        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="right-cluster rotate-[-30deg] translate-y-[-40px] flex w-full flex-row">
          <div className="flex gap-2">
            <div className="w-full"></div>
            <Key
              {...(keymap["DANCE_42"] || {})}
              isPressed={
                keymap["DANCE_42"]?.actions.some((action) => keyState[action]) ||
                false
              } mode={currentMode}
            />
            <Key
              {...(keymap["DANCE_43"] || {})}
              isPressed={
                keymap["DANCE_43"]?.actions.some((action) => keyState[action]) ||
                false
              } mode={currentMode}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
