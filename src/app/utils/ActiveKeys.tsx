interface KeyAction {
  [key: string]: {
    [mode: string]: string;
  };
}

const explicitKeys = ["<", ">", ":", ";"];

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
      // Check to see if the key begins with quotes
      if (
        (key.startsWith(`"`) && key.endsWith(`"`)) ||
        (key.startsWith(`'`) && key.endsWith(`'`))
      ) {
        // Strip the quotes for processing
        const strippedKey = key.substring(1, key.length - 1);
        // Process each character within the stripped key
        strippedKey.split("").forEach((char) => {
          // Check for explictKeys
          if (explicitKeys.includes(char)) {
            activeKeys.add(char);
          }
        });
      } else {
        if (key.length > 1) {
          // Check for specialKeys and " + " pattern
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
        } else {
          // Register single character actions directly
          if (!explicitKeys.includes(key)) {
            activeKeys.add(key);
          }
        }
      }
    }
  });

  // console.log(`Active keys for mode "${mode}':`, [...activeKeys]);
  return Array.from(activeKeys);
}
