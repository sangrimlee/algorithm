/**
 * 2023. Number of Pairs of Strings With Concatenation Equal to Target
 * https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target
 */
export function numOfPairs(nums: string[], target: string): number {
  const counter = new Map<string, number>();
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }

  let answer = 0;
  for (const [num, count] of counter) {
    if (!target.startsWith(num)) continue;
    const suffix = target.slice(num.length);
    if (num === suffix) {
      answer += count * (count - 1);
    } else {
      const suffixCount = counter.get(suffix) ?? 0;
      answer += count * suffixCount;
    }
  }
  return answer;
}
