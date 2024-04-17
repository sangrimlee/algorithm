/**
 * 2903. Find Indices With Index and Value Difference I
 * https://leetcode.com/problems/find-indices-with-index-and-value-difference-i
 */
export function findIndices(
  nums: number[],
  indexDifference: number,
  valueDifference: number,
): number[] {
  const n = nums.length;

  let minIndex = 0;
  let maxIndex = 0;
  for (let i = indexDifference; i < n; i++) {
    const prevIndex = i - indexDifference;
    if (nums[prevIndex] < nums[minIndex]) {
      minIndex = prevIndex;
    }
    if (nums[prevIndex] > nums[maxIndex]) {
      maxIndex = prevIndex;
    }
    if (nums[i] - nums[minIndex] >= valueDifference) {
      return [minIndex, i];
    }
    if (nums[maxIndex] - nums[i] >= valueDifference) {
      return [maxIndex, i];
    }
  }
  return [-1, -1];
}
