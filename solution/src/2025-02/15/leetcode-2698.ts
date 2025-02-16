/**
 * 2698. Find the Punishment Number of an Integer
 * https://leetcode.com/problems/find-the-punishment-number-of-an-integer
 */
export function punishmentNumber(n: number): number {
  let answer = 0;
  for (let num = 1; num <= n; num++) {
    if (isPunishmentNumber(num)) {
      answer += num * num;
    }
  }
  return answer;
}

function isPunishmentNumber(num: number): boolean {
  const square = num * num;
  const str = square.toString();
  function dfs(i: number, sum: number, curr: string): boolean {
    if (i === str.length) {
      return sum + parseInt(curr) === num;
    }
    if (curr !== '') {
      return dfs(i + 1, sum + parseInt(curr), str[i]) || dfs(i + 1, sum, curr + str[i]);
    }
    return dfs(i + 1, sum, curr + str[i]);
  }
  return dfs(0, 0, '');
}
