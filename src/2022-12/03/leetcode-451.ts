/**
 * 451. Sort Characters By Frequency
 * https://leetcode.com/problems/sort-characters-by-frequency/
 */
export function frequencySort(s: string): string {
  const frequency = new Map<string, number>();

  for (const char of s) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  return Array.from(frequency.entries())
    .sort(([, a], [, b]) => b - a)
    .map(([char, count]) => char.repeat(count))
    .join('');
}
