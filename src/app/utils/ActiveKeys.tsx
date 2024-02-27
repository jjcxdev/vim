interface KeyAction {
  [key: string]: {
    [mode: string]: string;
  };
}

const explicitKeys = ["<", ">", ":", ";", "`"];

const specialKeys = [
  "Control",
  "Escape",
  "Backspace",
  "Shift",
  "Alt",
  "Meta",
  "Option",
];

export function getActiveKeysForMode(
  keyActionObj: KeyAction,
  mode: string,
): string[] {
  let activeKeys = new Set<string>();

  Object.keys(keyActionObj).forEach((key) => {
    const actions = keyActionObj[key];
    if (actions[mode]) {
      // Handling keys wrapped in quotes
      if (
        (key.startsWith(`"`) && key.endsWith(`"`)) ||
        (key.startsWith(`'`) && key.endsWith(`'`))
      ) {
        const strippedKey = key.substring(1, key.length - 1); // Remove quotes
        if (explicitKeys.includes(strippedKey)) {
          activeKeys.add(strippedKey); // Add explicitly listed keys only
        }
      } else {
        // Handling special and compound keys
        if (specialKeys.some((specialKey) => key.includes(specialKey))) {
          // Add each special key found in the compound key
          specialKeys.forEach((specialKey) => {
            if (key.includes(specialKey)) {
              activeKeys.add(specialKey);
              // Handling compound keys split by " + "
              key
                .split(" + ")
                .filter((part) => part !== specialKey)
                .forEach((part) => activeKeys.add(part));
            }
          });
        } else if (key.includes(" + ")) {
          // Handling other compound keys without special keys
          key.split(" + ").forEach((part) => activeKeys.add(part));
        } else {
          // Handling single character and other keys directly
          activeKeys.add(key);
        }
      }
    }
  });

  // Debugging: Log the active keys for the given mode
  console.log(`Active keys for mode "${mode}":`, Array.from(activeKeys));

  return Array.from(activeKeys);
}
