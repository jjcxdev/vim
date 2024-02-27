"use client";

import CommandDisplay from "./components/CommandDisplay";
import GlobalCommands from "./components/GlobalCommands";
import Voyager from "./components/Voyager";
import { ModeProvider } from "./utils/ModeContext.js";

export default function Home() {
  return (
    <ModeProvider>
      <main className="flex h-screen w-full flex-col items-center justify-start p-4">
        <div className="w-full max-w-[950px] flex justify-start pb-8">
          <div className="p-2 text-xs text-gray-400 rounded-md border border-gray-700">
            Keyboard dropdown
          </div>
        </div>
        <div className="h-[425px] w-[950px] flex justify-center items-center',">
          <Voyager />
        </div>
        <CommandDisplay />
      </main>
    </ModeProvider>
  );
}
