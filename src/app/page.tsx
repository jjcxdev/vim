"use client";
import { useEffect, useState } from "react";
import { ModeProvider, useMode } from "./utils/ModeContext.js";
import { KeymapProvider, useKeymap } from "./utils/KeymapContext";
import { macBookKeymap } from "./keymaps/macbook";
import { testKeymap } from "./keymaps/test";
import { useKeyHandler } from "./utils/useKeyHandlers";

import CommandDisplay from "./components/CommandDisplay";
import MacBookLayout from "./layouts/MacBookLayout";
import AnsiLayout from "./layouts/AnsiLayout";
import Voyager from "./layouts/VoyagerLayout";

type KeyState = Record<string, boolean>;

export default function Home() {
  const [selectedLayout, setSelectedLayout] = useState("MacBookLayout");
  const [selectedKeymap, setSelectedKeymap] = useState("macBookKeymap");
  const { currentMode, setCurrentMode } = useMode();
  const { setKeymap } = useKeymap();
  const [keyState, setKeyState] = useState<KeyState>({});

  useEffect(() => {
    if (selectedKeymap === "MacBook") {
      setKeymap(macBookKeymap);
    } else {
      setKeymap(testKeymap);
    }
  }, [selectedKeymap, setKeymap]);

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
                <option value="Voyager">
                  ZSA
                  Voyager
                </option>
                <option value="MacBook">
                  MacBook
                </option>
                <option value="ANSI">
                  ANSI
                </option>
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
                <option value="macBookKeymap">
                  MacBook keymap
                </option>
                <option value="testKeymap">
                  TEST
                </option>
              </select>
            </div>
          </div>
          <div className="h-[425px] w-[950px] flex justify-center items-center',">
            {selectedLayout ===
              "Voyager" && (
                <Voyager />
              )}
            {selectedLayout === "ANSI" && (
              <AnsiLayout
                keyState={
                  keyState
                }
                keymap={
                  selectedKeymap ===
                    "macBookKeymap"
                    ? macBookKeymap
                    : testKeymap
                }
                currentMode={
                  currentMode
                }
              />
            )}
            {selectedLayout ===
              "MacBook" && (
                <MacBookLayout
                  keyState={
                    keyState
                  }
                  keymap={
                    selectedKeymap ===
                      "macBookKeymap"
                      ? macBookKeymap
                      : testKeymap
                  }
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
