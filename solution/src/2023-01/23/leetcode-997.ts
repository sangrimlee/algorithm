/**
 * 997. Find the Town Judge
 * https://leetcode.com/problems/find-the-town-judge
 */
export function findJudge(n: number, trust: number[][]): number {
  if (n === 1) {
    return 1;
  }

  const trustCount = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustCount[a] -= 1;
    trustCount[b] += 1;
  }

  return trustCount.indexOf(n - 1);
}
