/**
 * 2942. Find Words Containing Character
 * https://leetcode.com/problems/find-words-containing-character
 */
export function findWordsContaining(words: string[], x: string): number[] {
  const answer: number[] = [];
  words.forEach((word, i) => {
    if (word.includes(x)) {
      answer.push(i);
    }
  });
  return answer;
}
