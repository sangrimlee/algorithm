/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water
 */
export function maxArea(height: number[]): number {
  const getArea = (start: number, end: number) =>
    Math.min(height[start], height[end]) * (end - start);

  let answer = 0;
  let [start, end] = [0, height.length - 1];
  while (start < end) {
    answer = Math.max(answer, getArea(start, end));

    if (height[start] < height[end]) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  return answer;
}
