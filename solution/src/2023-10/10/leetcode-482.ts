/**
 * 482. License Key Formatting
 * https://leetcode.com/problems/license-key-formatting
 */
export function licenseKeyFormatting(s: string, k: number): string {
  const newStr = s.replace(/-/g, '').toUpperCase();
  const startIndex = newStr.length % k;
  const answer = startIndex === 0 ? [] : [newStr.substring(0, startIndex)];
  for (let i = startIndex; i < newStr.length; i += k) {
    answer.push(newStr.substring(i, i + k));
  }
  return answer.join('-');
}
