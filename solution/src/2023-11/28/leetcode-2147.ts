/**
 * 2147. Number of Ways to Divide a Long Corridor
 * https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor
 */
export function numberOfWays(corridor: string): number {
  const MOD = 10 ** 9 + 7;
  let [seats, plants] = [0, 0];
  let dividers = 1;

  for (const item of corridor) {
    if (item === 'S') {
      seats += 1;
    }

    if (seats === 2 && item === 'P') {
      plants += 1;
    }

    if (seats === 3) {
      dividers = (dividers * (plants + 1)) % MOD;
      [seats, plants] = [1, 0];
    }
  }

  return seats < 2 ? 0 : dividers;
}
