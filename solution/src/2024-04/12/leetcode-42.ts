/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water
 */
export function trap(height: number[]): number {
  const n = height.length;
  if (n <= 2) {
    return 0;
  }

  let answer = 0;
  let [left, right] = [1, n - 2];
  let maxLeftHeight = height[0];
  let maxRightHeight = height[n - 1];
  while (left <= right) {
    if (maxLeftHeight < maxRightHeight) {
      maxLeftHeight = Math.max(maxLeftHeight, height[left]);
      answer += maxLeftHeight - height[left];
      left += 1;
    } else {
      maxRightHeight = Math.max(maxRightHeight, height[right]);
      answer += maxRightHeight - height[right];
      right -= 1;
    }
  }
  return answer;
}
