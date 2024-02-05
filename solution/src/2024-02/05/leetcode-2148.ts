/**
 * 2148. Count Elements With Strictly Smaller and Greater Elements
 * https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements
 */
export function countElements(nums: number[]): number {
  let [max, maxCount] = [Number.MIN_SAFE_INTEGER, 0];
  let [min, minCount] = [Number.MAX_SAFE_INTEGER, 0];
  nums.forEach((num) => {
    if (max < num) {
      [max, maxCount] = [num, 1];
    } else if (max === num) {
      maxCount += 1;
    }

    if (min > num) {
      [min, minCount] = [num, 1];
    } else if (min === num) {
      minCount += 1;
    }
  });

  return max === min ? 0 : nums.length - maxCount - minCount;
}
