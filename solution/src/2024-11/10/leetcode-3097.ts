/**
 * 3097. Shortest Subarray With OR at Least K II
 * https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii
 */
export function minimumSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;
  const bitCounts = new Array<number>(32).fill(0);

  let [start, end] = [0, 0];
  let minLength = Number.MAX_SAFE_INTEGER;
  while (end < n) {
    updateBitCounts(bitCounts, nums[end], 1);
    while (start <= end && k <= convertBitsToNum(bitCounts)) {
      minLength = Math.min(minLength, end - start + 1);
      updateBitCounts(bitCounts, nums[start], -1);
      start += 1;
    }
    end += 1;
  }
  return minLength === Number.MAX_SAFE_INTEGER ? -1 : minLength;
}

function updateBitCounts(bitCounts: number[], num: number, delta: number): void {
  for (let i = 0; i < bitCounts.length; i++) {
    if (num & (1 << i)) {
      bitCounts[i] += delta;
    }
  }
}

function convertBitsToNum(bitCounts: number[]): number {
  let result = 0;
  for (let i = 0; i < bitCounts.length; i++) {
    if (bitCounts[i]) {
      result = result | (1 << i);
    }
  }
  return result;
}
