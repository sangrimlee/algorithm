/**
 * 2085. Count Common Words With One Occurrence
 * https://leetcode.com/problems/count-common-words-with-one-occurrence
 */
export function countWords(words1: string[], words2: string[]): number {
  const wordCounter1 = new Map<string, number>();
  const wordCounter2 = new Map<string, number>();
  for (const word1 of words1) {
    wordCounter1.set(word1, (wordCounter1.get(word1) ?? 0) + 1);
  }
  for (const word2 of words2) {
    wordCounter2.set(word2, (wordCounter2.get(word2) ?? 0) + 1);
  }

  let answer = 0;
  for (const [word, count1] of wordCounter1.entries()) {
    const count2 = wordCounter2.get(word) ?? 0;
    if (count1 === 1 && count2 === 1) {
      answer += 1;
    }
  }
  return answer;
}
