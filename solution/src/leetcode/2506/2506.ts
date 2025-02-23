/**
 * 2506. Count Pairs Of Similar Strings
 * https://leetcode.com/problems/count-pairs-of-similar-strings
 */
export function similarPairs(words: string[]): number {
  function maskWord(word: string) {
    let mask = 0;
    for (let i = 0; i < word.length; i++) {
      mask |= 1 << (word.charCodeAt(i) - 'a'.charCodeAt(0));
    }
    return mask;
  }

  let answer = 0;
  const maskCounter = new Map<number, number>();
  for (const word of words) {
    const mask = maskWord(word);
    const maskCount = maskCounter.get(mask) ?? 0;
    answer += maskCount;
    maskCounter.set(mask, maskCount + 1);
  }
  return answer;
}
