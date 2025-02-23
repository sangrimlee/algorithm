/**
 * 3016. Minimum Number of Pushes to Type Word II
 * https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii
 */
export function minimumPushes(word: string): number {
  const charCounter = new Map<string, number>();
  for (const char of word) {
    charCounter.set(char, (charCounter.get(char) ?? 0) + 1);
  }
  const counts = [...charCounter.values()].sort((a, b) => b - a);
  return counts.reduce((prev, count, i) => prev + (Math.floor(i / 8) + 1) * count, 0);
}
