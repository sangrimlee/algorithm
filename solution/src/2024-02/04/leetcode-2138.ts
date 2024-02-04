/**
 * 2138. Divide a String Into Groups of Size k
 * https://leetcode.com/problems/divide-a-string-into-groups-of-size-k
 */
export function divideString(s: string, k: number, fill: string): string[] {
  const n = s.length;
  const maxLength = Math.ceil(n / k) * k;
  const paddedStr = s.padEnd(maxLength * k, fill);

  const answer: string[] = [];
  for (let i = 0; i < maxLength; i += k) {
    answer.push(paddedStr.substring(i, i + k));
  }
  return answer;
}
