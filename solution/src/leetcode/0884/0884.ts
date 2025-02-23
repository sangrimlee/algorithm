/**
 * 884. Uncommon Words from Two Sentences
 * https://leetcode.com/problems/uncommon-words-from-two-sentences
 */
export function uncommonFromSentences(s1: string, s2: string): string[] {
  const counts = new Map<string, number>();
  const words = [...s1.split(' '), ...s2.split(' ')];
  for (const word of words) {
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }

  const answer = [];
  for (const [word, count] of counts.entries()) {
    if (count === 1) {
      answer.push(word);
    }
  }
  return answer;
}
