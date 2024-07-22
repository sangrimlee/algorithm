/**
 * 3206. Alternating Groups I
 * https://leetcode.com/problems/alternating-groups-i
 */
export function numberOfAlternatingGroups(colors: number[]): number {
  const n = colors.length;
  let answer = 0;
  for (let mid = 0; mid < n; mid++) {
    const left = mid === 0 ? n - 1 : mid - 1;
    const right = mid === n - 1 ? 0 : mid + 1;
    if (colors[left] !== colors[mid] && colors[mid] !== colors[right]) {
      answer += 1;
    }
  }
  return answer;
}
