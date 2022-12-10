/**
 * 2089. Find Target Indices After Sorting Array
 * https://leetcode.com/problems/find-target-indices-after-sorting-array/
 */
export function targetIndices(nums: number[], target: number): number[] {
  return nums
    .sort((a, b) => a - b)
    .reduce((targets, num, index) => {
      if (target === num) {
        targets.push(index);
      }
      return targets;
    }, [] as number[]);
}
