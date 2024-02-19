/**
 * 2269. Find the K-Beauty of a Number
 * https://leetcode.com/problems/find-the-k-beauty-of-a-number
 */
export function divisorSubstrings(num: number, k: number): number {
  const str = num.toString();
  const n = str.length;

  let answer = 0;
  for (let i = 0; i < n - k + 1; i++) {
    const substr = str.substring(i, i + k);
    if (num % +substr === 0) {
      answer += 1;
    }
  }
  return answer;
}
