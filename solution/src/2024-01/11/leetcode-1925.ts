/**
 * 1925. Count Square Sum Triples
 * https://leetcode.com/problems/count-square-sum-triples
 */
export function countTriples(n: number): number {
  function isSquare(num: number): boolean {
    const sqrt = Math.floor(Math.sqrt(num));
    return sqrt ** 2 === num;
  }

  let answer = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; a ** 2 + b ** 2 <= n ** 2; b++) {
      const c = a ** 2 + b ** 2;
      if (isSquare(c)) {
        answer += 2;
      }
    }
  }
  return answer;
}
