/**
 * 3210. Find the Encrypted String
 * https://leetcode.com/problems/find-the-encrypted-string
 */
export function getEncryptedString(s: string, k: number): string {
  const i = k % s.length;
  return s.substring(i) + s.substring(0, i);
}
