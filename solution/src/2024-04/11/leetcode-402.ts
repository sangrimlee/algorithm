/**
 * 402. Remove K Digits
 * https://leetcode.com/problems/remove-k-digits
 */
export function removeKdigits(num: string, k: number): string {
  let remain = k;
  const stack: number[] = [];
  for (const n of num) {
    const digit = parseInt(n);
    while (0 < stack.length && digit < stack[stack.length - 1] && 0 < remain) {
      stack.pop();
      remain -= 1;
    }
    if (0 < stack.length || digit !== 0) {
      stack.push(digit);
    }
  }

  const answer = remain === 0 ? stack.join('') : stack.slice(0, -remain).join('');
  return answer === '' ? '0' : answer;
}
