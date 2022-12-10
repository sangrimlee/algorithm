/**
 * 1328. Break a Palindrome
 * https://leetcode.com/problems/break-a-palindrome/
 */
export function breakPalindrome(palindrome: string): string {
  const n = palindrome.length;
  if (n === 1) {
    return '';
  }

  const arr = [...palindrome];
  const i = arr.findIndex((c) => c !== 'a');
  const isMid = n % 2 === 1 && i === Math.floor(n / 2);
  if (i === -1 || isMid) {
    arr[n - 1] = 'b';
  } else {
    arr[i] = 'a';
  }

  return arr.join('');
}
