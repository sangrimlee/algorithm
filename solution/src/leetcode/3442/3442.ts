/**
 * 3442. Maximum Difference Between Even and Odd Frequency I
 * https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i
 */
export function maxDifference(s: string): number {
  const counter = new Map<string, number>();
  for (const char of s) {
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }

  let [odd, even] = [0, s.length];
  for (const count of counter.values()) {
    if (count % 2 === 0) {
      even = Math.min(even, count);
    } else {
      odd = Math.max(odd, count);
    }
  }
  return odd - even;
}
