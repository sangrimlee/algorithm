/**
 * 925. Long Pressed Name
 * https://leetcode.com/problems/long-pressed-name
 */
export function isLongPressedName(name: string, typed: string): boolean {
  if (typed.length < name.length) {
    return false;
  }

  let nIndex = 0;
  for (let tIndex = 0; tIndex < typed.length; tIndex++) {
    if (nIndex < name.length && name[nIndex] === typed[tIndex]) {
      nIndex += 1;
      continue;
    }
    if (tIndex === 0 || typed[tIndex - 1] !== typed[tIndex]) {
      return false;
    }
  }
  return nIndex === name.length;
}
