/**
 * 1813. Sentence Similarity III
 * https://leetcode.com/problems/sentence-similarity-iii
 */
export function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');
  if (words1.length > words2.length) {
    return areSentencesSimilar(sentence2, sentence1);
  }

  let [start, end1, end2] = [0, words1.length - 1, words2.length - 1];
  while (start < words1.length && words1[start] === words2[start]) {
    start += 1;
  }
  while (0 <= end1 && words1[end1] === words2[end2]) {
    end1 -= 1;
    end2 -= 1;
  }
  return end1 < start;
}
