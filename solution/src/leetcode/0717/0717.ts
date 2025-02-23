/**
 * 717. 1-bit and 2-bit Characters
 * https://leetcode.com/problems/1-bit-and-2-bit-characters
 */
export function isOneBitCharacter(bits: number[]): boolean {
  const n = bits.length;
  let currentIndex = 0;
  while (currentIndex < n) {
    if (currentIndex === n - 1) {
      return true;
    }
    currentIndex += bits[currentIndex] === 1 ? 2 : 1;
  }
  return false;
}
