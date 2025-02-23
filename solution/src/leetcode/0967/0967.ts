/**
 * 967. Numbers With Same Consecutive Differences
 * https://leetcode.com/problems/numbers-with-same-consecutive-differences/
 */
export function numsSameConsecDiff(n: number, k: number): number[] {
  const answer: number[] = [];

  function dfs(current: string) {
    if (current.length === n) {
      answer.push(+current);
      return;
    }
    const prev = +current[current.length - 1];
    for (let i = 0; i < 10; i++) {
      if (Math.abs(prev - i) === k) {
        dfs(`${current}${i.toString()}`);
      }
    }
  }

  for (let i = 1; i < 10; i++) {
    dfs(i.toString());
  }

  return answer;
}
