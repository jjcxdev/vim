"use client";
import { useState } from "react";
import CommandDisplay from "./components/CommandDisplay";
import MBP from "./components/MBP";
import Voyager from "./components/Voyager";
import { ModeProvider } from "./utils/ModeContext.js";

export default function Home() {
  const [selectedLayout, setSelectedLayout] = useState("Voyager");

  return (
    <ModeProvider>
      <main className="flex h-screen w-full flex-col items-center justify-start p-4">
        <div className="w-full max-w-[950px] flex justify-start pb-8">
          <select
            className="p-2 text-xs bg-gray-50/10 text-gray-400 rounded-md border border-gray-700"
            value={selectedLayout}
            onChange={(e) => setSelectedLayout(e.target.value)}
          >
            <option value="Voyager">ZSA Voyager</option>
            <option value="MBP"> MacBook Pro</option>
          </select>
        </div>
        <div className="h-[425px] w-[950px] flex justify-center items-center',">
          {selectedLayout === "Voyager" && <Voyager />}
          {selectedLayout === "MBP" && <MBP />}
        </div>
        <CommandDisplay />
      </main>
    </ModeProvider>
  );
}
