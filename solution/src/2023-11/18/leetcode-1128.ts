/**
 * 1128. Number of Equivalent Domino Pairs
 * https://leetcode.com/problems/number-of-equivalent-domino-pairs
 */
export function numEquivDominoPairs(dominoes: number[][]): number {
  const hash = ([a, b]: number[]) => {
    return [Math.min(a, b), Math.max(a, b)].join('');
  };
  const counts = new Map<string, number>();
  for (const domino of dominoes) {
    const key = hash(domino);
    const count = counts.get(key) ?? 0;
    counts.set(key, count + 1);
  }
  return [...counts.values()].reduce((prev, count) => prev + (count * (count - 1)) / 2, 0);
}
