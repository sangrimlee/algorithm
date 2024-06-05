/**
 * 2375. Construct Smallest Number From DI String
 * https://leetcode.com/problems/construct-smallest-number-from-di-string
 */
export function smallestNumber(pattern: string): string {
  const n = pattern.length;

  let answer = '';
  let stack: number[] = [];
  for (let i = 0; i <= n; i++) {
    stack.push(i + 1);
    if (pattern[i] === 'I' || i === n) {
      answer += stack.reverse().join('');
      stack = [];
    }
  }

  return answer;
}
