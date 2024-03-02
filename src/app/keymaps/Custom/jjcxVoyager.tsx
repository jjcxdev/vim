import { PiCommand } from "react-icons/pi";
import { PiOption } from "react-icons/pi";
import { PiControl } from "react-icons/pi";
import { RiSpace } from "react-icons/ri";
import { PiBackspace } from "react-icons/pi";
import { BsShift } from "react-icons/bs";
import { BsArrowReturnLeft } from "react-icons/bs";

export interface KeyConfig {
  id: string;
  upper: React.ReactNode;
  lower: React.ReactNode;
  actions: string[];
  isPressed: boolean;
}

export const jjcxVoyagerKeymap: Record<string, KeyConfig> = {
  /* -------- First Row -------- */

  DANCE_00: {
    id: "DANCE_00",
    upper: "",
    lower: "caps",
    actions: ["CapsLock"],
    isPressed: false,
  },
  /* -------- First Row -------- */

  DANCE_01: {
    id: "DANCE_01",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_02: {
    id: "DANCE_02",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_03: {
    id: "DANCE_03",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_04: {
    id: "DANCE_04",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_05: {
    id: "DANCE_05",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_06: {
    id: "DANCE_06",
    upper: "",
    lower: "esc",
    actions: ["Escape"],
    isPressed: false,
  },
  DANCE_07: {
    id: "DANCE_07",
    upper: "",
    lower: "del",
    actions: ["Delete"],
    isPressed: false,
  },
  DANCE_08: {
    id: "DANCE_08",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_09: {
    id: "DANCE_09",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_0A: {
    id: "DANCE_0A",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_0B: {
    id: "DANCE_0B",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },

  /* -------- Second Row -------- */

  DANCE_10: {
    id: "DANCE_10",
    upper: "",
    lower: "",
    actions: [""],
    isPressed: false,
  },
  DANCE_11: {
    id: "DANCE_11",
    upper: "Q",
    lower: "",
    actions: ["q", "Q"],
    isPressed: false,
  },
  DANCE_12: {
    id: "DANCE_12",
    upper: "W",
    lower: "*",
    actions: ["w", "*", "W"],
    isPressed: false,
  },
  DANCE_13: {
    id: "DANCE_13",
    upper: "E",
    lower: "&",
    actions: ["e", "&", "E"],
    isPressed: false,
  },
  DANCE_14: {
    id: "DANCE_14",
    upper: "R",
    lower: "#",
    actions: ["r", "#", "R"],
    isPressed: false,
  },
  DANCE_15: {
    id: "DANCE_15",
    upper: "T",
    lower: "|",
    actions: ["t", "|", "T"],
    isPressed: false,
  },
  DANCE_16: {
    id: "DANCE_16",
    upper: "Y",
    lower: "~",
    actions: ["y", "~", "Y"],
    isPressed: false,
  },
  DANCE_17: {
    id: "DANCE_17",
    upper: "U",
    lower: "^",
    actions: ["u", "^", "U"],
    isPressed: false,
  },
  DANCE_18: {
    id: "DANCE_18",
    upper: "I",
    lower: "$",
    actions: ["i", "$", "I"],
    isPressed: false,
  },
  DANCE_19: {
    id: "DANCE_19",
    upper: "O",
    lower: "%",
    actions: ["o", "%", "O"],
    isPressed: false,
  },
  DANCE_1A: {
    id: "DANCE_1A",
    upper: "P",
    lower: "+",
    actions: ["p", "+", "P"],
    isPressed: false,
  },
  DANCE_1B: {
    id: "DANCE_1B",
    upper: "-",
    lower: "_",
    actions: ["-", "_"],
    isPressed: false,
  },

  /* -------- Third Row -------- */

  DANCE_20: {
    id: "DANCE_20",
    upper: "",
    lower: "ctrl",
    actions: ["Control"],
    isPressed: false,
  },
  DANCE_21: {
    id: "DANCE_21",
    upper: "A",
    lower: "@",
    actions: ["a", "@", "A"],
    isPressed: false,
  },
  DANCE_22: {
    id: "DANCE_22",
    upper: "S",
    lower: "[",
    actions: ["s", "[", "S"],
    isPressed: false,
  },
  DANCE_23: {
    id: "DANCE_23",
    upper: "D",
    lower: "{",
    actions: ["d", "{", "D"],
    isPressed: false,
  },
  DANCE_24: {
    id: "DANCE_24",
    upper: "F",
    lower: "(",
    actions: ["f", "(", "F"],
    isPressed: false,
  },
  DANCE_25: {
    id: "DANCE_25",
    upper: "G",
    lower: "!",
    actions: ["g", "!", "G"],
    isPressed: false,
  },
  DANCE_26: {
    id: "DANCE_26",
    upper: "H",
    lower: "=",
    actions: ["h", "=", "H"],
    isPressed: false,
  },
  DANCE_27: {
    id: "DANCE_27",
    upper: "J",
    lower: ")",
    actions: ["j", ")", "J"],
    isPressed: false,
  },
  DANCE_28: {
    id: "DANCE_28",
    upper: "K",
    lower: "}",
    actions: ["k", "}", "K"],
    isPressed: false,
  },
  DANCE_29: {
    id: "DANCE_29",
    upper: "L",
    lower: "]",
    actions: ["l", "]", "L"],
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
    upper: "'",
    lower: '"',
    actions: ['"', "'"],
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
    upper: "Z",
    lower: "opt",
    actions: ["z", "Alt", "Z"],
    isPressed: false,
  },
  DANCE_32: {
    id: "DANCE_32",
    upper: "X",
    lower: "",
    actions: ["x", "X"],
    isPressed: false,
  },
  DANCE_33: {
    id: "DANCE_33",
    upper: "C",
    lower: "",
    actions: ["c", "C"],
    isPressed: false,
  },
  DANCE_34: {
    id: "DANCE_34",
    upper: "V",
    lower: "",
    actions: ["v", "V"],
    isPressed: false,
  },
  DANCE_35: {
    id: "DANCE_35",
    upper: "B",
    lower: "<",
    actions: ["b", "<", "B"],
    isPressed: false,
  },
  DANCE_36: {
    id: "DANCE_36",
    upper: "N",
    lower: ">",
    actions: ["n", "N", "N"],
    isPressed: false,
  },
  DANCE_37: {
    id: "DANCE_37",
    upper: "M",
    lower: "\\",
    actions: ["m", "\\", "M"],
    isPressed: false,
  },
  DANCE_38: {
    id: "DANCE_38",
    upper: ",",
    lower: "`",
    actions: [",", "`"],
    isPressed: false,
  },
  DANCE_39: {
    id: "DANCE_39",
    upper: ".",
    lower: "?",
    actions: [".", "?"],
    isPressed: false,
  },
  DANCE_3A: {
    id: "DANCE_3A",
    upper: "/",
    lower: "shift",
    actions: ["/", "Shift"],
    isPressed: false,
  },
  DANCE_3B: {
    id: "DANCE_3B",
    upper: "",
    lower: "ctrl",
    actions: ["Control"],
    isPressed: false,
  },

  /* -------- Fifth Row -------- */

  DANCE_40: {
    id: "DANCE_40",
    upper: "",
    lower: "enter",
    actions: ["Enter"],
    isPressed: false,
  },
  DANCE_41: {
    id: "DANCE_41",
    upper: "tab",
    lower: "cmd",
    actions: ["Tab", "Meta"],
    isPressed: false,
  },
  DANCE_42: {
    id: "DANCE_42",
    upper: "del",
    lower: "shift",
    actions: ["Backspace", "Shift"],
    isPressed: false,
  },
  DANCE_43: {
    id: "DANCE_43",
    upper: " ",
    lower: "space",
    actions: [" "],
    isPressed: false,
  },
};

{/*
import { PiCommand } from "react-icons/pi";
import { PiOption } from "react-icons/pi";
import { PiControl } from "react-icons/pi";
import { RiSpace } from "react-icons/ri";
import { PiBackspace } from "react-icons/pi";
import { BsShift } from "react-icons/bs";
import { BsArrowReturnLeft } from "react-icons/bs";
  */}
