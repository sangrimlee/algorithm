/**
 * 1630. Arithmetic Subarrays
 * https://leetcode.com/problems/arithmetic-subarrays
 */
export function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  const minmax = (arr: number[]) => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach((num) => {
      min = Math.min(num, min);
      max = Math.max(num, max);
    });
    return [min, max];
  };

  const isArithmetic = (left: number, right: number) => {
    if (right - left < 2) {
      return true;
    }
    const s = nums.slice(left, right + 1);
    const [min, max] = minmax(s);
    if ((max - min) % (s.length - 1) !== 0) {
      return false;
    }
    const set = new Set(s);
    const diff = (max - min) / (s.length - 1);
    for (let num = min + diff; num < max; num += diff) {
      if (!set.has(num)) {
        return false;
      }
    }
    return true;
  };

  return l.map((left, i) => isArithmetic(left, r[i]));
}
