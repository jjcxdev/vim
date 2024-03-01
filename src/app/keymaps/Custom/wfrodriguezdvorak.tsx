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

export const wfrDvorakKeymap: Record<string, KeyConfig> = {
  /* -------- First Row -------- */
  /* Fucked up and didn't want to rebuid
   * which is why this row is 5 - will fix down the road */

  DANCE_50: {
    id: "DANCE_50",
    upper: "Esc",
    lower: "",
    actions: ["Escape"],
    isPressed: false,
  },
  DANCE_51: {
    id: "DANCE_51",
    upper: "F1",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_52: {
    id: "DANCE_52",
    upper: "F2",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_53: {
    id: "DANCE_53",
    upper: "F3",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_54: {
    id: "DANCE_54",
    upper: "F4",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_55: {
    id: "DANCE_55",
    upper: "F5",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_56: {
    id: "DANCE_56",
    upper: "F6",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_57: {
    id: "DANCE_57",
    upper: "F7",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_58: {
    id: "DANCE_58",
    upper: "F8",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_59: {
    id: "DANCE_59",
    upper: "F9",
    lower: "",
    actions: ["Escape"],
    isPressed: false,
  },
  DANCE_5A: {
    id: "DANCE_5A",
    upper: "F10",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_5B: {
    id: "DANCE_5B",
    upper: "F11",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_5C: {
    id: "DANCE_5C",
    upper: "F12",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_5D: {
    id: "DANCE_5D",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  /* -------- First Row -------- */

  DANCE_01: {
    id: "DANCE_01",
    upper: "~",
    lower: "`",
    actions: ["~", "`"],
    isPressed: false,
  },
  DANCE_02: {
    id: "DANCE_02",
    upper: "!",
    lower: "1",
    actions: ["!", "1"],
    isPressed: false,
  },
  DANCE_03: {
    id: "DANCE_03",
    upper: "@",
    lower: "2",
    actions: ["@", "2"],
    isPressed: false,
  },
  DANCE_04: {
    id: "DANCE_04",
    upper: "#",
    lower: "3",
    actions: ["#", "3"],
    isPressed: false,
  },
  DANCE_05: {
    id: "DANCE_05",
    upper: "$",
    lower: "4",
    actions: ["$", "4"],
    isPressed: false,
  },
  DANCE_06: {
    id: "DANCE_06",
    upper: "%",
    lower: "5",
    actions: ["%", "5"],
    isPressed: false,
  },
  DANCE_07: {
    id: "DANCE_07",
    upper: "^",
    lower: "6",
    actions: ["^", "6"],
    isPressed: false,
  },
  DANCE_08: {
    id: "DANCE_08",
    upper: "&",
    lower: "7",
    actions: ["&", "7"],
    isPressed: false,
  },
  DANCE_09: {
    id: "DANCE_09",
    upper: "*",
    lower: "8",
    actions: ["*", "8"],
    isPressed: false,
  },
  DANCE_0A: {
    id: "DANCE_0A",
    upper: "(",
    lower: "9",
    actions: ["(", "9"],
    isPressed: false,
  },
  DANCE_0B: {
    id: "DANCE_0B",
    upper: ")",
    lower: "0",
    actions: [")", "0"],
    isPressed: false,
  },
  DANCE_0C: {
    id: "DANCE_0C",
    upper: "_",
    lower: "-",
    actions: ["_", "-"],
    isPressed: false,
  },
  DANCE_0D: {
    id: "DANCE_0D",
    upper: "+",
    lower: "=",
    actions: ["+", "="],
    isPressed: false,
  },
  DANCE_0E: {
    id: "DANCE_0E",
    upper: "",
    lower: "delete",
    actions: ["Backspace"],
    isPressed: false,
  },

  /* -------- Second Row -------- */

  DANCE_10: {
    id: "DANCE_11",
    upper: "",
    lower: "tab",
    actions: ["Tab"],
    isPressed: false,
  },
  DANCE_11: {
    id: "DANCE_12",
    upper: "",
    lower: "Q",
    actions: ["q"],
    isPressed: false,
  },
  DANCE_12: {
    id: "DANCE_13",
    upper: "",
    lower: "W",
    actions: ["w"],
    isPressed: false,
  },
  DANCE_13: {
    id: "DANCE_14",
    upper: "",
    lower: "E",
    actions: ["e"],
    isPressed: false,
  },
  DANCE_14: {
    id: "DANCE_15",
    upper: "",
    lower: "R",
    actions: ["r"],
    isPressed: false,
  },
  DANCE_15: {
    id: "DANCE_16",
    upper: "",
    lower: "T",
    actions: ["t"],
    isPressed: false,
  },
  DANCE_16: {
    id: "DANCE_17",
    upper: "",
    lower: "Y",
    actions: ["y"],
    isPressed: false,
  },
  DANCE_17: {
    id: "DANCE_18",
    upper: "",
    lower: "U",
    actions: ["u"],
    isPressed: false,
  },
  DANCE_18: {
    id: "DANCE_19",
    upper: "",
    lower: "I",
    actions: ["i"],
    isPressed: false,
  },
  DANCE_19: {
    id: "DANCE_1A",
    upper: "",
    lower: "O",
    actions: ["o"],
    isPressed: false,
  },
  DANCE_1A: {
    id: "DANCE_1B",
    upper: "",
    lower: "P",
    actions: ["p"],
    isPressed: false,
  },
  DANCE_1B: {
    id: "DANCE_1C",
    upper: "{",
    lower: "[",
    actions: ["{", "["],
    isPressed: false,
  },
  DANCE_1C: {
    id: "DANCE_1D",
    upper: "}",
    lower: "]",
    actions: ["}", "]"],
    isPressed: false,
  },
  DANCE_1D: {
    id: "DANCE_1E",
    upper: "|",
    lower: "\\",
    actions: ["|", "\\"],
    isPressed: false,
  },

  /* -------- Third Row -------- */

  DANCE_20: {
    id: "DANCE_21",
    upper: "",
    lower: "caps",
    actions: ["CapsLock"],
    isPressed: false,
  },
  DANCE_21: {
    id: "DANCE_22",
    upper: "",
    lower: "A",
    actions: ["a"],
    isPressed: false,
  },
  DANCE_22: {
    id: "DANCE_23",
    upper: "",
    lower: "S",
    actions: ["s"],
    isPressed: false,
  },
  DANCE_23: {
    id: "DANCE_24",
    upper: "",
    lower: "D",
    actions: ["d"],
    isPressed: false,
  },
  DANCE_24: {
    id: "DANCE_25",
    upper: "",
    lower: "F",
    actions: ["f"],
    isPressed: false,
  },
  DANCE_25: {
    id: "DANCE_26",
    upper: "",
    lower: "G",
    actions: ["g"],
    isPressed: false,
  },
  DANCE_26: {
    id: "DANCE_27",
    upper: "",
    lower: "H",
    actions: ["h"],
    isPressed: false,
  },
  DANCE_27: {
    id: "DANCE_28",
    upper: "",
    lower: "J",
    actions: ["j"],
    isPressed: false,
  },
  DANCE_28: {
    id: "DANCE_29",
    upper: "",
    lower: "K",
    actions: ["k"],
    isPressed: false,
  },
  DANCE_29: {
    id: "DANCE_2A",
    upper: "",
    lower: "L",
    actions: ["l"],
    isPressed: false,
  },
  DANCE_2A: {
    id: "DANCE_2B",
    upper: ":",
    lower: ";",
    actions: [":", ";"],
    isPressed: false,
  },
  DANCE_2B: {
    id: "DANCE_2C",
    upper: '"',
    lower: "'",
    actions: ['"', "'"],
    isPressed: false,
  },
  DANCE_2C: {
    id: "DANCE_2D",
    upper: "",
    lower: "return",
    actions: ["Enter"],
    isPressed: false,
  },

  /* -------- Fourth Row -------- */

  DANCE_30: {
    id: "DANCE_31",
    upper: "",
    lower: "shift",
    actions: ["Shift"],
    isPressed: false,
  },
  DANCE_31: {
    id: "DANCE_32",
    upper: "",
    lower: "Z",
    actions: ["z"],
    isPressed: false,
  },
  DANCE_32: {
    id: "DANCE_33",
    upper: "",
    lower: "X",
    actions: ["x"],
    isPressed: false,
  },
  DANCE_33: {
    id: "DANCE_34",
    upper: "",
    lower: "C",
    actions: ["c"],
    isPressed: false,
  },
  DANCE_34: {
    id: "DANCE_35",
    upper: "",
    lower: "V",
    actions: ["v"],
    isPressed: false,
  },
  DANCE_35: {
    id: "DANCE_36",
    upper: "",
    lower: "B",
    actions: ["b"],
    isPressed: false,
  },
  DANCE_36: {
    id: "DANCE_37",
    upper: "",
    lower: "N",
    actions: ["n"],
    isPressed: false,
  },
  DANCE_37: {
    id: "DANCE_38",
    upper: "",
    lower: "M",
    actions: ["m"],
    isPressed: false,
  },
  DANCE_38: {
    id: "DANCE_39",
    upper: "<",
    lower: ",",
    actions: ["<", ","],
    isPressed: false,
  },
  DANCE_39: {
    id: "DANCE_3A",
    upper: ">",
    lower: ".",
    actions: [">", "."],
    isPressed: false,
  },
  DANCE_3A: {
    id: "DANCE_3B",
    upper: "?",
    lower: "/",
    actions: ["?", "/"],
    isPressed: false,
  },
  DANCE_3B: {
    id: "DANCE_3C",
    upper: "",
    lower: "shift",
    actions: ["Shift"],
    isPressed: false,
  },

  /* -------- Fifth Row -------- */

  DANCE_40: {
    id: "DANCE_41",
    upper: "",
    lower: "fn",
    actions: [""],
    isPressed: false,
  },
  DANCE_41: {
    id: "DANCE_42",
    upper: "",
    lower: <PiControl />,
    actions: ["Control"],
    isPressed: false,
  },
  DANCE_42: {
    id: "DANCE_43",
    upper: "",
    lower: <PiOption />,
    actions: ["Alt"],
    isPressed: false,
  },
  DANCE_43: {
    id: "DANCE_44",
    upper: "",
    lower: <PiCommand />,
    actions: ["Meta"],
    isPressed: false,
  },
  DANCE_44: {
    id: "DANCE_45",
    upper: "",
    lower: "",
    actions: [" "],
    isPressed: false,
  },
  DANCE_45: {
    id: "DANCE_46",
    upper: "",
    lower: <PiCommand />,
    actions: ["Meta"],
    isPressed: false,
  },
  DANCE_46: {
    id: "DANCE_47",
    upper: "",
    lower: <PiOption />,
    actions: ["Alt"],
    isPressed: false,
  },
  DANCE_47: {
    id: "DANCE_48",
    upper: "",
    lower: <IoMdArrowDropleft />,
    actions: ["ArrowLeft"],
    isPressed: false,
  },
  DANCE_48: {
    id: "DANCE_49",
    upper: "",
    lower: <IoMdArrowDropup />,
    actions: ["ArrowUp"],
    isPressed: false,
  },
  DANCE_49: {
    id: "DANCE_4A",
    upper: "",
    lower: <IoMdArrowDropdown />,
    actions: ["ArrowDown"],
    isPressed: false,
  },
  DANCE_4A: {
    id: "DANCE_4B",
    upper: "",
    lower: <IoMdArrowDropright />,
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