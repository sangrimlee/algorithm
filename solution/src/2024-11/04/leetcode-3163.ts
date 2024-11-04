/**
 * 3163. String Compression III
 * https://leetcode.com/problems/string-compression-iii
 */
export function compressedString(word: string): string {
  let answer = '';
  let [prev, prevCount] = [word[0], 1];
  for (let i = 1; i < word.length; i++) {
    const char = word[i];
    if (prev === char && prevCount < 9) {
      prevCount += 1;
    } else {
      answer += `${prevCount}${prev}`;
      [prev, prevCount] = [char, 1];
    }
  }
  answer += `${prevCount}${prev}`;
  return answer;
}
