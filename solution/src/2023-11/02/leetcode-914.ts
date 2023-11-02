/**
 * 914. X of a Kind in a Deck of Cards
 * https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards
 */
export function hasGroupsSizeX(deck: number[]): boolean {
  const gcd = (a: number, b: number) => {
    while (0 < b) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const counter = new Map<number, number>();
  for (const num of deck) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }
  const values = [...counter.values()];
  return 2 <= values.reduce(gcd, values[0]);
}
