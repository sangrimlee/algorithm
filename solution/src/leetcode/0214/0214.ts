/**
 * 214. Shortest Palindrome
 * https://leetcode.com/problems/shortest-palindrome
 */
export function shortestPalindrome(s: string): string {
  if (s.length === 0) {
    return s;
  }
  const modified = `^#${s.split('').join('#')}#$`;
  const n = modified.length;
  const radius = new Array<number>(n).fill(0);

  let centerIndex = 0;
  let rightBoundary = 0;
  let maxPalindromeLength = 0;

  for (let i = 1; i < n - 1; i++) {
    const mirrorIndex = 2 * centerIndex - i;
    if (i < rightBoundary) {
      radius[i] = Math.min(rightBoundary - i, radius[mirrorIndex]);
    }

    while (modified[i + 1 + radius[i]] === modified[i - 1 - radius[i]]) {
      radius[i] += 1;
    }

    if (i + radius[i] > rightBoundary) {
      centerIndex = i;
      rightBoundary = i + radius[i];
    }

    if (i - radius[i] === 1) {
      maxPalindromeLength = Math.max(maxPalindromeLength, radius[i]);
    }
  }
  const suffix = s.slice(maxPalindromeLength);
  return toReversed(suffix) + s;
}

function toReversed(str: string): string {
  return str.split('').reverse().join('');
}
