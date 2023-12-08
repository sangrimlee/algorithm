/**
 * 1550. Three Consecutive Odds
 * https://leetcode.com/problems/three-consecutive-odds
 */
export function threeConsecutiveOdds(arr: number[]): boolean {
  const findOddIndex = (arr: number[], startIndex = 0) => {
    for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] % 2 === 1) {
        return i;
      }
    }
    return arr.length;
  };

  const n = arr.length;
  let startIndex = findOddIndex(arr);
  let endIndex = startIndex + 1;
  while (endIndex < n) {
    if (arr[endIndex] % 2 === 1) {
      endIndex += 1;
    } else {
      startIndex = findOddIndex(arr, endIndex + 1);
      endIndex = startIndex + 1;
    }
    if (endIndex - startIndex === 3) {
      return true;
    }
  }
  return false;
}
