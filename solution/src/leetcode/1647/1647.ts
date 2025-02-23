/**
 * 1647. Minimum Deletions to Make Character Frequencies Unique
 * https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
 */
export function minDeletions(s: string): number {
  let answer = 0;

  const counter = new Map<string, number>();
  for (const char of s) {
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }

  const used = new Map<number, boolean>();
  counter.forEach((count) => {
    while (used.get(count) && 0 < count) {
      answer += 1;
      count -= 1;
    }
    used.set(count, true);
  });
  return answer;
}
