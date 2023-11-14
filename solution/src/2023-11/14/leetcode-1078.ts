/**
 * 1078. Occurrences After Bigram
 * https://leetcode.com/problems/occurrences-after-bigram
 */
export function findOcurrences(text: string, first: string, second: string): string[] {
  const words = text.split(' ');
  const n = words.length;

  const answer = [];
  for (let i = 2; i < n; i++) {
    if (words[i - 2] === first && words[i - 1] === second) {
      answer.push(words[i]);
    }
  }

  return answer;
}
