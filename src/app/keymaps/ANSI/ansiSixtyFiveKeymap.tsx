import React from "react";

import { PiControl } from "react-icons/pi";
import { PiOption } from "react-icons/pi";
import { PiCommand } from "react-icons/pi";

import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


export interface KeyConfig {
  id: string;
  upper: React.ReactNode;
  lower: React.ReactNode;
  actions: string[];
  isPressed: boolean;
}

export const ansiSixtyFiveKeymap: Record<string, KeyConfig> = {
  /* -------- First Row -------- */

  DANCE_01: {
    id: "DANCE_01",
    upper: "` ~",
    lower: "Esc",
    actions: ["~", "`", "Escape"],
    isPressed: false,
  },
  DANCE_02: {
    id: "DANCE_02",
    upper: "1 !",
    lower: "F1",
    actions: ["!", "1"],
    isPressed: false,
  },
  DANCE_03: {
    id: "DANCE_03",
    upper: "2 @",
    lower: "F2",
    actions: ["@", "2"],
    isPressed: false,
  },
  DANCE_04: {
    id: "DANCE_04",
    upper: "3 #",
    lower: "F3",
    actions: ["#", "3"],
    isPressed: false,
  },
  DANCE_05: {
    id: "DANCE_05",
    upper: "4 $",
    lower: "F4",
    actions: ["$", "4"],
    isPressed: false,
  },
  DANCE_06: {
    id: "DANCE_06",
    upper: "5 %",
    lower: "F5",
    actions: ["%", "5"],
    isPressed: false,
  },
  DANCE_07: {
    id: "DANCE_07",
    upper: "6 ^",
    lower: "F6",
    actions: ["^", "6"],
    isPressed: false,
  },
  DANCE_08: {
    id: "DANCE_08",
    upper: "7 &",
    lower: "F7",
    actions: ["&", "7"],
    isPressed: false,
  },
  DANCE_09: {
    id: "DANCE_09",
    upper: "8 *",
    lower: "F8",
    actions: ["*", "8"],
    isPressed: false,
  },
  DANCE_0A: {
    id: "DANCE_0A",
    upper: "9 (",
    lower: "F9",
    actions: ["(", "9"],
    isPressed: false,
  },
  DANCE_0B: {
    id: "DANCE_0B",
    upper: "10 )",
    lower: "F10",
    actions: [")", "0"],
    isPressed: false,
  },
  DANCE_0C: {
    id: "DANCE_0C",
    upper: "- _",
    lower: "F11",
    actions: ["_", "-"],
    isPressed: false,
  },
  DANCE_0D: {
    id: "DANCE_0D",
    upper: "= +",
    lower: "F12",
    actions: ["+", "="],
    isPressed: false,
  },
  DANCE_0E: {
    id: "DANCE_0E",
    upper: "",
    lower: "backspace",
    actions: ["Backspace"],
    isPressed: false,
  },
  DANCE_0F: {
    id: "DANCE_0F",
    upper: "",
    lower: "home",
    actions: [""],
    isPressed: false,
  },

  /* -------- Second Row -------- */

  DANCE_10: {
    id: "DANCE_10",
    upper: "",
    lower: "tab",
    actions: ["Tab"],
    isPressed: false,
  },
  DANCE_11: {
    id: "DANCE_11",
    upper: "",
    lower: "Q",
    actions: ["q"],
    isPressed: false,
  },
  DANCE_12: {
    id: "DANCE_12",
    upper: "",
    lower: "W",
    actions: ["w"],
    isPressed: false,
  },
  DANCE_13: {
    id: "DANCE_13",
    upper: "",
    lower: "E",
    actions: ["e"],
    isPressed: false,
  },
  DANCE_14: {
    id: "DANCE_14",
    upper: "",
    lower: "R",
    actions: ["r"],
    isPressed: false,
  },
  DANCE_15: {
    id: "DANCE_15",
    upper: "",
    lower: "T",
    actions: ["t"],
    isPressed: false,
  },
  DANCE_16: {
    id: "DANCE_16",
    upper: "",
    lower: "Y",
    actions: ["y"],
    isPressed: false,
  },
  DANCE_17: {
    id: "DANCE_17",
    upper: "",
    lower: "U",
    actions: ["u"],
    isPressed: false,
  },
  DANCE_18: {
    id: "DANCE_18",
    upper: "",
    lower: "I",
    actions: ["i"],
    isPressed: false,
  },
  DANCE_19: {
    id: "DANCE_19",
    upper: "",
    lower: "O",
    actions: ["o"],
    isPressed: false,
  },
  DANCE_1A: {
    id: "DANCE_1A",
    upper: "",
    lower: "P",
    actions: ["p"],
    isPressed: false,
  },
  DANCE_1B: {
    id: "DANCE_1B",
    upper: "{",
    lower: "[",
    actions: ["{", "["],
    isPressed: false,
  },
  DANCE_1C: {
    id: "DANCE_1C",
    upper: "}",
    lower: "]",
    actions: ["}", "]"],
    isPressed: false,
  },
  DANCE_1D: {
    id: "DANCE_1D",
    upper: "|",
    lower: "\\",
    actions: ["|", "\\"],
    isPressed: false,
  },
  DANCE_1E: {
    id: "DANCE_1E",
    upper: "end",
    lower: "",
    actions: [""],
    isPressed: false,
  },

  /* -------- Third Row -------- */

  DANCE_20: {
    id: "DANCE_20",
    upper: "",
    lower: "caps",
    actions: ["CapsLock"],
    isPressed: false,
  },
  DANCE_21: {
    id: "DANCE_21",
    upper: "",
    lower: "A",
    actions: ["a"],
    isPressed: false,
  },
  DANCE_22: {
    id: "DANCE_22",
    upper: "",
    lower: "S",
    actions: ["s"],
    isPressed: false,
  },
  DANCE_23: {
    id: "DANCE_23",
    upper: "",
    lower: "D",
    actions: ["d"],
    isPressed: false,
  },
  DANCE_24: {
    id: "DANCE_24",
    upper: "",
    lower: "F",
    actions: ["f"],
    isPressed: false,
  },
  DANCE_25: {
    id: "DANCE_25",
    upper: "",
    lower: "G",
    actions: ["g"],
    isPressed: false,
  },
  DANCE_26: {
    id: "DANCE_26",
    upper: "",
    lower: "H",
    actions: ["h"],
    isPressed: false,
  },
  DANCE_27: {
    id: "DANCE_27",
    upper: "",
    lower: "J",
    actions: ["j"],
    isPressed: false,
  },
  DANCE_28: {
    id: "DANCE_28",
    upper: "",
    lower: "K",
    actions: ["k"],
    isPressed: false,
  },
  DANCE_29: {
    id: "DANCE_29",
    upper: "",
    lower: "L",
    actions: ["l"],
    isPressed: false,
  },
  DANCE_2A: {
    id: "DANCE_2A",
    upper: ":",
    lower: ";",
    actions: [":", ";"],
    isPressed: false,
  },
  DANCE_2B: {
    id: "DANCE_2B",
    upper: '"',
    lower: "'",
    actions: ['"', "'"],
    isPressed: false,
  },
  DANCE_2C: {
    id: "DANCE_2C",
    upper: "",
    lower: "return",
    actions: ["Enter"],
    isPressed: false,
  },
  DANCE_2D: {
    id: "DANCE_2D",
    upper: "ins",
    lower: "",
    actions: [""],
    isPressed: false,
  },

  /* -------- Fourth Row -------- */

  DANCE_30: {
    id: "DANCE_30",
    upper: "",
    lower: "shift",
    actions: ["Shift"],
    isPressed: false,
  },
  DANCE_31: {
    id: "DANCE_31",
    upper: "",
    lower: "Z",
    actions: ["z"],
    isPressed: false,
  },
  DANCE_32: {
    id: "DANCE_32",
    upper: "",
    lower: "X",
    actions: ["x"],
    isPressed: false,
  },
  DANCE_33: {
    id: "DANCE_33",
    upper: "",
    lower: "C",
    actions: ["c"],
    isPressed: false,
  },
  DANCE_34: {
    id: "DANCE_34",
    upper: "",
    lower: "V",
    actions: ["v"],
    isPressed: false,
  },
  DANCE_35: {
    id: "DANCE_35",
    upper: "",
    lower: "B",
    actions: ["b"],
    isPressed: false,
  },
  DANCE_36: {
    id: "DANCE_36",
    upper: "",
    lower: "N",
    actions: ["n"],
    isPressed: false,
  },
  DANCE_37: {
    id: "DANCE_37",
    upper: "",
    lower: "M",
    actions: ["m"],
    isPressed: false,
  },
  DANCE_38: {
    id: "DANCE_38",
    upper: "<",
    lower: ",",
    actions: ["<", ","],
    isPressed: false,
  },
  DANCE_39: {
    id: "DANCE_39",
    upper: ">",
    lower: ".",
    actions: [">", "."],
    isPressed: false,
  },
  DANCE_3A: {
    id: "DANCE_3A",
    upper: "?",
    lower: "/",
    actions: ["?", "/"],
    isPressed: false,
  },
  DANCE_3B: {
    id: "DANCE_3B",
    upper: "",
    lower: "shift",
    actions: ["Shift"],
    isPressed: false,
  },
  DANCE_3C: {
    id: "DANCE_3C",
    upper: "up",
    lower: "",
    actions: ["ArrowUp"],
    isPressed: false,
  },
  DANCE_3D: {
    id: "DANCE_3D",
    upper: "del",
    lower: "",
    actions: ["Delete"],
    isPressed: false,
  },

  /* -------- Fifth Row -------- */

  DANCE_40: {
    id: "DANCE_40",
    upper: "ctrl",
    lower: "",
    actions: ["Control"],
    isPressed: false,
  },
  DANCE_41: {
    id: "DANCE_41",
    upper: "cmd",
    lower: "",
    actions: ["Meta"],
    isPressed: false,
  },
  DANCE_42: {
    id: "DANCE_42",
    upper: "",
    lower: "opt",
    actions: ["Alt"],
    isPressed: false,
  },
  DANCE_43: {
    id: "DANCE_43",
    upper: " ",
    lower: "",
    actions: [" "],
    isPressed: false,
  },
  DANCE_44: {
    id: "DANCE_44",
    upper: "",
    lower: "opt",
    actions: ["Alt"],
    isPressed: false,
  },
  DANCE_45: {
    id: "DANCE_45",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_46: {
    id: "DANCE_46",
    upper: "",
    lower: "ctrl",
    actions: ["Control"],
    isPressed: false,
  },
  DANCE_47: {
    id: "DANCE_47",
    upper: "",
    lower: "left",
    actions: ["ArrowLeft"],
    isPressed: false,
  },
  DANCE_48: {
    id: "DANCE_48",
    upper: "",
    lower: "up",
    actions: ["ArrowDown"],
    isPressed: false,
  },
  DANCE_49: {
    id: "DANCE_49",
    upper: "",
    lower: "down",
    actions: ["ArrowRight"],
    isPressed: false,
  },
};
{/*
import { PiControl } from "react-icons/pi";
import { PiOption } from "react-icons/pi";
import { PiCommand } from "react-icons/pi";

import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
  */}
