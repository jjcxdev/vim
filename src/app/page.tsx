"use client";

// Layouts
import MacBookLayout from "./layouts/Apple/MacBookLayout";
import VoyagerLayout from "./layouts/ZSA Voyager/VoyagerLayout";
import AppleLayout from "./layouts/Apple/AppleLayout";
import AnsiSixtyFiveLayout from "./layouts/ANSI/AnsiSixtyFiveLayout";
import AnsiLayout from "./layouts/ANSI/AnsiLayout";

// Keymaps
import { jjcxVoyagerKeymap } from "./keymaps/Custom/jjcxVoyager";
import { macBookQwertyKeymap } from "./keymaps/Apple/macBookQwertyKeymap";
import { appleStandardKeymap } from "./keymaps/Apple/appleStandardKeymap";
import { ansiSixtyFiveKeymap } from "./keymaps/ANSI/ansiSixtyFiveKeymap";
import { wfrDvorakKeymap } from "./keymaps/Custom/wfrodriguezdvorak";
import { ansiQwertyKeymap } from "./keymaps/ANSI/ansiQwertyKeymap";

// Command Display
import CommandDisplay from "./components/CommandDisplay";

import { useEffect, useState } from "react";
import { ModeProvider, useMode } from "./utils/ModeContext";
import { KeymapProvider, useKeymap } from "./utils/KeymapContext";
import { useKeyHandler } from "./utils/useKeyHandlers";

import Header from "./components/Header";

type KeyState = Record<string, boolean>;

export default function Home() {
  const [selectedLayout, setSelectedLayout] = useState("MacBookLayout");
  const [selectedKeymap, setSelectedKeymap] = useState("macBookStandardKeymap");
  const { currentMode, setCurrentMode } = useMode();
  const { setKeymap } = useKeymap();
  const [keyState, setKeyState] = useState<KeyState>({});

  type LayoutKeymapMapping = {
    [key: string]: string[];
  };

  type DisplayNames = {
    [key: string]: string;
  };

  const layoutKeymapMapping: LayoutKeymapMapping = {
    MacBookLayout: ["macBookQwertyKeymap"],
    AppleLayout: ["appleStandardKeymap"],
    VoyagerLayout: ["jjcxVoyagerKeymap"],
    AnsiSixtyFiveLayout: ["ansiSixtyFiveKeymap"],
    AnsiLayout: ["ansiQwertyKeymap"],
    // IsoLayout: ["wfrDvorakKeymap"],
  };

  const layoutDisplayNames: DisplayNames = {
    MacBookLayout: "MacBook",
    AppleLayout: "Apple",
    VoyagerLayout: "ZSA Voyager",
    AnsiLayout: "ANSI",
    AnsiSixtyFiveLayout: "ANSI 65%",
  };

  const keymapDisplayNames: DisplayNames = {
    macBookQwertyKeymap: "MacBook",
    appleStandardKeymap: "Apple",
    jjcxVoyagerKeymap: "jjcx custom",
    wfrDvorakKeymap: "WFR Dvorak",
    ansiQwertyKeymap: "QWERTY",
    ansiSixtyFiveKeymap: "ANSI 65%"
  };


  useEffect(() => {
    setSelectedLayout(Object.keys(layoutKeymapMapping)[0]);
    setSelectedKeymap(layoutKeymapMapping[Object.keys(layoutKeymapMapping)[0]][0]);
  }, [layoutKeymapMapping]);


  useEffect(() => {
    if (selectedLayout) {
      setSelectedKeymap(layoutKeymapMapping[selectedLayout][0]);
    }
  }, [selectedLayout, layoutKeymapMapping]);

  useEffect(() => {
    const findLayoutForKeymap = (keymap: string) => {
      return Object.keys(layoutKeymapMapping).find(layout =>
        layoutKeymapMapping[layout].includes(keymap)
      );
    };

    const layoutForKeymap = findLayoutForKeymap(selectedKeymap);
    if (layoutForKeymap && selectedLayout !== layoutForKeymap) {
      setSelectedLayout(layoutForKeymap);
    }
  }, [selectedKeymap, layoutKeymapMapping, selectedLayout]);

  useKeyHandler(setCurrentMode, currentMode, setKeyState);

  return (
    <ModeProvider>
      <KeymapProvider>
        <div className="w-full h-full pb-8"><Header /></div>
        <main className="flex h-screen w-full flex-col items-center justify-start p-4">

          <div className="w-full max-w-[950px] flex justify-start gap-4 py-8">
            {/* Select keyboard layouts*/}
            <div className="flex text-xs gap-1 text-gray-400 items-center flex-col">
              select keyboard
              <select
                className="p-2 text-xs bg-gray-50/10 text-gray-400 rounded-md border border-gray-700"
                value={
                  selectedLayout
                }
                onChange={(e) =>
                  setSelectedLayout(
                    e
                      .target
                      .value
                  )
                }
              >
                {Object.keys(layoutKeymapMapping).map((layout) => (
                  <option key={layout} value={layout}>
                    {layoutDisplayNames[layout]}                 </option>
                ))}
              </select>
            </div>
            {/* Select keymaps in ./keymaps/ which will populate the layouts*/}
            <div className="flex gap-1 text-gray-400 text-xs items-center flex-col">
              select keymap
              <select
                className="p-2 text-xs bg-gray-50/10 text-gray-400 rounded-md border border-gray-700"
                value={
                  selectedKeymap
                }
                onChange={(e) =>
                  setSelectedKeymap(
                    e
                      .target
                      .value
                  )
                }
              >
                {layoutKeymapMapping[selectedLayout]?.map((keymap) => (
                  <option key={keymap} value={keymap}>
                    {keymapDisplayNames[keymap]}                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="h-[425px] w-[900px] flex justify-center items-center',">
            {selectedLayout ===
              "MacBookLayout" && (
                <MacBookLayout
                  keyState={
                    keyState
                  }
                  keymap={macBookQwertyKeymap}
                  currentMode={
                    currentMode
                  }
                />
              )}
            {selectedLayout ===
              "AppleLayout" && (
                <AppleLayout
                  keyState={
                    keyState
                  }
                  keymap={appleStandardKeymap}
                  currentMode={
                    currentMode
                  }
                />
              )}
            {selectedLayout ===
              "AnsiLayout" && (
                <AnsiLayout
                  keyState={
                    keyState
                  }
                  keymap={ansiQwertyKeymap}
                  currentMode={
                    currentMode
                  }
                />
              )}
            {selectedLayout ===
              "AnsiSixtyFiveLayout" && (
                <AnsiSixtyFiveLayout
                  keyState={
                    keyState
                  }
                  keymap={ansiSixtyFiveKeymap}
                  currentMode={
                    currentMode
                  }
                />
              )}
            {selectedLayout ===
              "VoyagerLayout" && (
                <VoyagerLayout
                  keyState={keyState}
                  keymap={jjcxVoyagerKeymap}
                  currentMode={
                    currentMode
                  }
                />
              )}
          </div>
          <CommandDisplay />
        </main>
      </KeymapProvider>
    </ModeProvider>
  );
}
