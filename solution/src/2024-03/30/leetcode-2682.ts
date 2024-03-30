/**
 * 2682. Find the Losers of the Circular Game
 * https://leetcode.com/problems/find-the-losers-of-the-circular-game
 */
export function circularGameLosers(n: number, k: number): number[] {
  const friends = new Set(Array.from({ length: n }, (_, i) => i + 1));

  let [curr, i] = [0, 0];
  while (friends.has((i % n) + 1)) {
    curr += 1;
    friends.delete((i % n) + 1);
    i += curr * k;
  }

  return [...friends];
}
