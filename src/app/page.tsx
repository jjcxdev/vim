"use client";

// Layouts
import MacBookLayout from "./layouts/Apple/MacBookLayout";
import VoyagerLayout from "./layouts/ZSA Voyager/VoyagerLayout";
import AppleLayout from "./layouts/Apple/AppleLayout";

// Keymaps
import { jjcxVoyagerKeymap } from "./keymaps/Custom/jjcxVoyager";
import { macBookStandardKeymap } from "./keymaps/Apple/macbookStandardKeymap";
import { appleStandardKeymap } from "./keymaps/Apple/appleStandardKeymap";
import { wfrDvorakKeymap } from "./keymaps/Custom/wfrodriguezdvorak";

// Command Display
import CommandDisplay from "./components/CommandDisplay";

import { useEffect, useState } from "react";
import { ModeProvider, useMode } from "./utils/ModeContext";
import { KeymapProvider, useKeymap } from "./utils/KeymapContext";
import { useKeyHandler } from "./utils/useKeyHandlers";

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
    MacBookLayout: ["macBookStandardKeymap"],
    AppleLayout: ["appleStandardKeymap", "wfrDvorakKeymap"],
    VoyagerLayout: ["jjcxVoyagerKeymap"],
  };

  const layoutDisplayNames: DisplayNames = {
    MacBookLayout: "MacBook",
    AppleLayout: "Apple",
    VoyagerLayout: "ZSA Voyager",
  };

  const keymapDisplayNames: DisplayNames = {
    macBookStandardKeymap: "MacBook",
    appleStandardKeymap: "Apple",
    jjcxVoyagerKeymap: "jjcx custom",
    wfrDvorakKeymap: "WFR Dvorak"
  };


  useEffect(() => {
    setSelectedLayout(Object.keys(layoutKeymapMapping)[0]);
    setSelectedKeymap(layoutKeymapMapping[Object.keys(layoutKeymapMapping)[0]][0]);
  }, []);


  useEffect(() => {
    if (selectedLayout) {
      setSelectedKeymap(layoutKeymapMapping[selectedLayout][0]);
    }
  }, [selectedLayout]);

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
  }, [selectedKeymap]);

  useKeyHandler(setCurrentMode, currentMode, setKeyState);

  return (
    <ModeProvider>
      <KeymapProvider>
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
          <div className="h-[425px] w-[950px] flex justify-center items-center',">
            {selectedLayout ===
              "MacBookLayout" && (
                <MacBookLayout
                  keyState={
                    keyState
                  }
                  keymap={macBookStandardKeymap}
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
                  keymap={selectedKeymap === "appleStandardKeymap" ? appleStandardKeymap : selectedKeymap === "wfrDvorakKeymap" ? wfrDvorakKeymap : undefined}
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
