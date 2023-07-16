/**
 * 443. String Compression
 * https://leetcode.com/problems/string-compression
 */
export function compress(chars: string[]): number {
  const n = chars.length;
  let charIndex = 0;
  let compressedIndex = 0;

  while (charIndex < n) {
    const char = chars[charIndex];
    let groupLength = 1;
    while (charIndex + groupLength < n && chars[charIndex + groupLength] === char) {
      groupLength += 1;
    }
    chars[compressedIndex] = char;
    compressedIndex += 1;

    if (1 < groupLength) {
      for (const digit of groupLength.toString()) {
        chars[compressedIndex] = digit;
        compressedIndex += 1;
      }
    }
    charIndex += groupLength;
  }
  chars.splice(compressedIndex);

  return compressedIndex;
}
