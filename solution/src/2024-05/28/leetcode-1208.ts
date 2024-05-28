/**
 * 1208. Get Equal Substrings Within Budget
 * https://leetcode.com/problems/get-equal-substrings-within-budget
 */
export function equalSubstring(s: string, t: string, maxCost: number): number {
  function getCost(i: number): number {
    return Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
  }

  const n = s.length;

  let answer = 0;
  let start = 0;
  let currentCost = 0;
  for (let end = 0; end < n; end++) {
    currentCost += getCost(end);
    while (currentCost > maxCost) {
      currentCost -= getCost(start);
      start += 1;
    }
    answer = Math.max(answer, end - start + 1);
  }

  return answer;
}
