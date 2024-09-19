/**
 * 3285. Find Indices of Stable Mountains
 * https://leetcode.com/problems/find-indices-of-stable-mountains
 */
export function stableMountains(height: number[], threshold: number): number[] {
  const n = height.length;
  const answer: number[] = [];
  for (let i = 1; i < n; i++) {
    if (height[i - 1] > threshold) {
      answer.push(i);
    }
  }
  return answer;
}
