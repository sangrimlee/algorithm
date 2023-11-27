/**
 * 1346. Check If N and Its Double Exist
 * https://leetcode.com/problems/check-if-n-and-its-double-exist
 */
export function checkIfExist(arr: number[]): boolean {
  const set = new Set();

  for (const num of arr) {
    if (set.has(num * 2) || set.has(num / 2)) {
      return true;
    }
    set.add(num);
  }
  return false;
}
