/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome
 */
export function isPalindrome(s: string): boolean {
  const alphanumeric = /^[a-z0-9]$/i;

  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    const startChar = s[start].toLowerCase();
    const endChar = s[end].toLowerCase();
    if (!alphanumeric.test(startChar)) {
      start += 1;
    } else if (!alphanumeric.test(endChar)) {
      end -= 1;
    } else {
      if (startChar !== endChar) {
        return false;
      }
      start += 1;
      end -= 1;
    }
  }

  return true;
}

/** 간단하게 요구사항만을 반영 */
// export function isPalindrome(s: string): boolean {
//   const converted = s.toLowerCase().replace(/[^a-z]/gi, '');
//   const reversed = [...converted].reverse().join('');
//   return converted === reversed;
// }
