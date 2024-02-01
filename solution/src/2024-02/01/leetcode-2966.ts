/**
 * 2966. Divide Array Into Arrays With Max Difference
 * https://leetcode.com/problems/divide-array-into-arrays-with-max-difference
 */
export function divideArray(nums: number[], k: number): number[][] {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const answer: number[][] = [];
  for (let i = 0; i < n; i += 3) {
    if (k < nums[i + 2] - nums[i]) {
      return [];
    }
    answer.push(nums.slice(i, i + 3));
  }
  return answer;
}
