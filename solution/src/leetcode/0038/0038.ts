/**
 * 38. Count and Say
 * https://leetcode.com/problems/count-and-say
 */
export function countAndSay(n: number): string {
  let current = '1';
  for (let i = 0; i < n - 1; i++) {
    current = runLengthEncoding(current);
  }
  return current;
}

function runLengthEncoding(s: string): string {
  let result = '';
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      count += 1;
    } else {
      result += `${count.toString()}${s[i - 1]}`;
      count = 1;
    }
  }
  result += `${count.toString()}${s[s.length - 1]}`;
  return result;
}
