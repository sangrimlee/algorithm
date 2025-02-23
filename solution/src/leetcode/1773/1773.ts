/**
 * 1773. Count Items Matching a Rule
 * https://leetcode.com/problems/count-items-matching-a-rule
 */
export function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const itemIndex = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
  return items.filter((item) => item[itemIndex] === ruleValue).length;
}
