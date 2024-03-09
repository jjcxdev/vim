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

import Footer from "./components/Footer";

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

    const firstLayout = Object.keys(layoutKeymapMapping)[0];
    setSelectedLayout(firstLayout);
    setSelectedKeymap(layoutKeymapMapping[firstLayout][0]);
  }, []);

  useEffect(() => {
    if (selectedLayout) {
      setSelectedKeymap(layoutKeymapMapping[selectedLayout][0]);

    }
  }, [selectedLayout]);

  useKeyHandler(setCurrentMode, currentMode, setKeyState);

  return (
    <ModeProvider>
      <KeymapProvider>
        <div className="flex flex-col min-h-screen">

          {/* ----- CONTENT ----- */}
          <main className="flex-1 w-full flex flex-col items-center overflow-hidden justify-between px-4">
            {/* ----- HEADER ----- */}

            <div className="w-full items-center max-w-[900px] flex justify-between gap-4 py-4">
              <div className="text-2xl">
                VimKeyboard
              </div>

              {/* Select keyboard layouts*/}

              <div className="flex gap-4">
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
            </div>

            {/* ----- KEYBOARDS ----- */}

            <div className="h-[450px] max-w-[950px] flex justify-center items-center">
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

            {/* ----- COMMANDS ----- */}
            {/* THIS IS WHERE THE OVERFLOW-Y-SCROLL OCCURS */}
            <CommandDisplay />
            {/* ----- FOOTER ----- */}

            <div className="w-full h-full">
              <Footer />
            </div>
          </main>
        </div>

      </KeymapProvider>
    </ModeProvider>
  );
}
