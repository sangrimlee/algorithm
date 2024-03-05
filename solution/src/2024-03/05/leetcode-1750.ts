/**
 * 1750. Minimum Length of String After Deleting Similar Ends
 * https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends
 */
export function minimumLength(s: string): number {
  let [start, end] = [0, s.length - 1];
  while (start < end && s[start] === s[end]) {
    const char = s[start];
    while (start <= end && s[start] === char) {
      start += 1;
    }
    while (start <= end && s[end] === char) {
      end -= 1;
    }
  }
  return end - start + 1;
}
