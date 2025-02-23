/**
 * 3271. Hash Divided String
 * https://leetcode.com/problems/hash-divided-string
 */
export function stringHash(s: string, k: number): string {
  const n = s.length;
  const aCode = 'a'.charCodeAt(0);

  let answer = '';
  for (let startIndex = 0; startIndex < n; startIndex += k) {
    let hashedValue = 0;
    for (let i = startIndex; i < startIndex + k; i++) {
      hashedValue += s.charCodeAt(i) - aCode;
    }
    answer += String.fromCharCode((hashedValue % 26) + aCode);
  }
  return answer;
}
