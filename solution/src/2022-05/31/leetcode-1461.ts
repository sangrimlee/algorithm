/*
  1461. Check If a String Contains All Binary Codes of Size K
  https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
*/

export function hasAllCodes(s: string, k: number): boolean {
  const n = s.length;
  const isExist = new Map<number, boolean>();
  const maxValue = (1 << k) - 1;

  let total = 1 << k;
  let currentValue = 0;

  for (let i = 0; i < n; i++) {
    currentValue = ((currentValue << 1) & maxValue) | +s[i];

    if (k <= i + 1 && !isExist.get(currentValue)) {
      isExist.set(currentValue, true);
      total -= 1;
      if (total === 0) {
        return true;
      }
    }
  }

  return false;
}
