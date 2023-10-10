/**
 * 2009. Minimum Number of Operations to Make Array Continuous
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous
 */
export function minOperations(nums: number[]): number {
  const upperbound = (arr: number[], target: number) => {
    let [start, end] = [0, arr.length];
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (target < arr[mid]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };

  const n = nums.length;
  const sortedNums = [...new Set(nums)].sort((a, b) => a - b);
  return sortedNums.reduce((answer, num, i) => {
    const operation = n - upperbound(sortedNums, num + n - 1) + i;
    return Math.min(answer, operation);
  }, n);
}
