/**
 * 2563. Count the Number of Fair Pairs
 * https://leetcode.com/problems/count-the-number-of-fair-pairs
 */
export function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b);
  return countPairs(nums, upper) - countPairs(nums, lower - 1);
}

/**
 * 인덱스 쌍의 합이 `target`보다 작거나 같은 쌍의 개수
 */
function countPairs(nums: number[], target: number) {
  let count = 0;
  let [start, end] = [0, nums.length - 1];
  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum <= target) {
      count += end - start;
      start += 1;
    } else {
      end -= 1;
    }
  }
  return count;
}
