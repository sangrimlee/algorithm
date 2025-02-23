/**
 * 2109. Adding Spaces to a String
 * https://leetcode.com/problems/adding-spaces-to-a-string
 */
export function addSpaces(s: string, spaces: number[]): string {
  const words = [];
  let prevSpace = 0;
  for (const space of spaces) {
    words.push(s.substring(prevSpace, space));
    prevSpace = space;
  }
  words.push(s.substring(prevSpace));
  return words.join(' ');
}
