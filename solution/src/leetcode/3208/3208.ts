/**
 * 3208. Alternating Groups II
 * https://leetcode.com/problems/alternating-groups-ii
 */
export function numberOfAlternatingGroups(colors: number[], k: number): number {
  const n = colors.length;

  let currentGroupCount = 1;
  let alternatingGroupCount = 0;
  let lastColor = colors[0];
  for (let i = 1; i < n + k - 1; i++) {
    const currentColor = colors[i % n];
    if (currentColor === lastColor) {
      currentGroupCount = 1;
      continue;
    }
    currentGroupCount += 1;
    if (currentGroupCount >= k) {
      alternatingGroupCount += 1;
    }
    lastColor = currentColor;
  }
  return alternatingGroupCount;
}
