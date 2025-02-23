/**
 * 2381. Shifting Letters II
 * https://leetcode.com/problems/shifting-letters-ii
 */
export function shiftingLetters(s: string, shifts: number[][]): string {
  const n = s.length;
  const shiftDiff = new Array<number>(n + 1).fill(0);
  for (const [start, end, direction] of shifts) {
    const shift = direction === 1 ? 1 : -1;
    shiftDiff[start] += shift;
    shiftDiff[end + 1] -= shift;
  }

  let answer = '';
  let currentShift = 0;
  for (let i = 0; i < n; i++) {
    currentShift += shiftDiff[i];
    answer += shiftingLetter(s[i], currentShift);
  }
  return answer;
}

function shiftingLetter(letter: string, shift: number) {
  const aCharCode = 'a'.charCodeAt(0);
  const charCode = letter.charCodeAt(0);
  const shiftedIndex = (((charCode - aCharCode + shift) % 26) + 26) % 26;
  return String.fromCharCode(aCharCode + shiftedIndex);
}
