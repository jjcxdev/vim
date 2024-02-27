interface KeyAction {
  [key: string]: {
    [mode: string]: string;
  };
}

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

  //  console.log(`Processing mode: ${mode}`);

  Object.keys(keyActionObj).forEach((key) => {
    const actions = keyActionObj[key];
    if (actions[mode]) {
      if (key.length > 2) {
        // Check for special keys and " + " pattern
        if (specialKeys.some((specialKey) => key.includes(specialKey))) {
          specialKeys.forEach((specialKey) => {
            if (key.includes(specialKey)) {
              activeKeys.add(specialKey);
              let remainder = key.replace(specialKey, "").trim();
              if (remainder.includes(" + ")) {
                remainder
                  .split(" + ")
                  .forEach((part) => activeKeys.add(part.trim()));
              } else if (remainder) {
                // Handle any remainder that might not have been a special key
                activeKeys.add(remainder);
              }
            }
          });
        } else if (key.includes(" + ")) {
          // Handle compound keys without special characters
          key.split(" + ").forEach((part) => activeKeys.add(part.trim()));
        }
      } else if (key.length === 2) {
        // Split two-character actions into individual keys
        activeKeys.add(key[0]);
        activeKeys.add(key[1]);
      } else {
        // Register single character actions directly
        activeKeys.add(key);
      }
    }
  });

  // console.log(`Active keys for mode "${mode}':`, [...activeKeys]);
  return Array.from(activeKeys);
}
