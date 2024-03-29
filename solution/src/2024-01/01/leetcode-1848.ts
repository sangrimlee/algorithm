/**
 * 1848. Minimum Distance to the Target Element
 * https://leetcode.com/problems/minimum-distance-to-the-target-element
 */
export function getMinDistance(nums: number[], target: number, start: number): number {
  let answer = Number.MAX_SAFE_INTEGER;
  nums.forEach((num, i) => {
    if (num === target) {
      answer = Math.min(answer, Math.abs(i - start));
    }
  });
  return answer;
}
