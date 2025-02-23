/**
 * 2375. Construct Smallest Number From DI String
 * https://leetcode.com/problems/construct-smallest-number-from-di-string
 */
export function smallestNumber(pattern: string): string {
  const n = pattern.length;
  let stack: number[] = [];
  let result = '';
  for (let i = 0; i <= n; i++) {
    stack.push(i + 1);
    if (i === n || pattern[i] === 'I') {
      result += stack.reverse().join('');
      stack = [];
    }
  }
  return result;
}
