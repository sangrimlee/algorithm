/**
 * 18. 4Sum
 * https://leetcode.com/problems/4sum
 */
export function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);

  const twoSum = (nums: number[], target: number): number[][] => {
    const result: number[][] = [];
    const set = new Set<number>();
    nums.forEach((num) => {
      if (result.length === 0 || result[result.length - 1][1] !== num) {
        if (set.has(target - num)) {
          result.push([target - num, num]);
        }
      }
      set.add(num);
    });
    return result;
  };

  const kSum = (nums: number[], target: number, k: number): number[][] => {
    const avg = Math.floor(target / k);
    if (nums.length === 0 || avg < nums[0] || nums[nums.length - 1] < avg) {
      return [];
    }
    if (k === 2) {
      return twoSum(nums, target);
    }
    const result: number[][] = [];
    nums.forEach((num, i) => {
      if (i === 0 || nums[i - 1] !== num) {
        for (const subset of kSum(nums.slice(i + 1), target - num, k - 1)) {
          result.push([num, ...subset]);
        }
      }
    });
    return result;
  };

  return kSum(nums, target, 4);
}
