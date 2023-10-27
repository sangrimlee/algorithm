/**
 * 819. Most Common Word
 * https://leetcode.com/problems/most-common-word
 */
export function mostCommonWord(paragraph: string, banned: string[]): string {
  const sanitize = (word: string) => {
    return word.toLowerCase().replace(/[^a-z]/gi, '');
  };

  const banSet = new Set(banned);
  const words = paragraph.split(/[!?',;. ]+/).map(sanitize);
  const wordCounts = new Map<string, number>();
  let answer = '';
  let maxCount = 0;
  for (const word of words) {
    if (banSet.has(word)) continue;
    const wordCount = (wordCounts.get(word) ?? 0) + 1;
    wordCounts.set(word, wordCount);
    if (maxCount < wordCount) {
      answer = word;
      maxCount = wordCount;
    }
  }
  return answer;
}
