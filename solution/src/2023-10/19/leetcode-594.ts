/**
 * 594. Longest Harmonious Subsequence
 * https://leetcode.com/problems/longest-harmonious-subsequence
 */
class Counter extends Map<number, number> {
  get(key: number, defaultValue = 0) {
    return super.get(key) ?? defaultValue;
  }

  add(key: number) {
    return this.set(key, this.get(key) + 1);
  }
}

export function findLHS(nums: number[]): number {
  const counter = new Counter();
  for (const num of nums) {
    counter.add(num);
  }

  let answer = 0;
  for (const num of counter.keys()) {
    const maxOtherCount = Math.max(counter.get(num - 1), counter.get(num + 1));
    if (0 < maxOtherCount) {
      answer = Math.max(answer, counter.get(num) + maxOtherCount);
    }
  }
  return answer;
}
