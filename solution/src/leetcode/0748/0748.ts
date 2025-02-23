/**
 * 748. Shortest Completing Word
 * https://leetcode.com/problems/shortest-completing-word
 */
export function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const canCompelete = (licensePlate: string, word: string) => {
    let remain = licensePlate;
    for (const char of word) {
      remain = remain.replace(char, '');
    }
    return remain.length === 0;
  };

  let answer = '';
  const replaced = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
  for (const word of words) {
    if (answer && answer.length <= word.length) {
      continue;
    }
    if (canCompelete(replaced, word)) {
      answer = word;
    }
  }
  return answer;
}
