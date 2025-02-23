/**
 * 38. Count and Say
 * https://leetcode.com/problems/count-and-say
 */
export function countAndSay(n: number): string {
  const count = (s: string) => {
    let result = '';

    let num = '';
    let count = 0;
    for (const char of s) {
      if (num === char) {
        count += 1;
        continue;
      }
      if (0 < count) {
        result += `${count.toString()}${num.toString()}`;
      }
      num = char;
      count = 1;
    }
    result += `${count.toString()}${num.toString()}`;
    return result;
  };

  let answer = '1';
  for (let i = 2; i <= n; i++) {
    answer = count(answer);
  }
  return answer;
}
