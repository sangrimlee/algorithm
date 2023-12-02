/**
 * 1437. Check If All 1's Are at Least Length K Places Away
 * https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away
 */
export function kLengthApart(nums: number[], k: number): boolean {
  const n = nums.length;
  const startIndex = nums.findIndex((num) => num === 1);

  let prevIndex = startIndex;
  let minApart = Number.MAX_SAFE_INTEGER;
  for (let i = startIndex + 1; i < n; i++) {
    if (nums[i] === 1) {
      minApart = Math.min(minApart, i - prevIndex);
      prevIndex = i;
    }
  }
  return k < minApart;
}
