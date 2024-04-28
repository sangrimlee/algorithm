/**
 * 2405. Optimal Partition of String
 * https://leetcode.com/problems/optimal-partition-of-string
 */
export function partitionString(s: string): number {
  const set = new Set<string>();

  let answer = 1;
  for (const char of s) {
    if (set.has(char)) {
      set.clear();
      answer += 1;
    }
    set.add(char);
  }
  return answer;
}
