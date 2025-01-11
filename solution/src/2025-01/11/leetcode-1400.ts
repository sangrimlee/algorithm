/**
 * 1400. Construct K Palindrome Strings
 * https://leetcode.com/problems/construct-k-palindrome-strings
 */
export function canConstruct(s: string, k: number): boolean {
  if (s.length < k) {
    return false;
  }
  const isOdd = new Array<boolean>(26).fill(false);
  let oddCount = 0;
  for (const char of s) {
    const i = char.charCodeAt(0) - 'a'.charCodeAt(0);
    isOdd[i] = !isOdd[i];
    oddCount += isOdd[i] ? 1 : -1;
  }
  return oddCount <= k;
}
