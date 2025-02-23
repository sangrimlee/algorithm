/**
 * 2490. Circular Sentence
 * https://leetcode.com/problems/circular-sentence
 */
export function isCircularSentence(sentence: string): boolean {
  const n = sentence.length;

  if (!sentence.startsWith(sentence[n - 1])) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (sentence[i] !== ' ') continue;
    if (sentence[i - 1] !== sentence[i + 1]) {
      return false;
    }
  }

  return true;
}
