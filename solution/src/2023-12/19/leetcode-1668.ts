/**
 * 1668. Maximum Repeating Substring
 * https://leetcode.com/problems/maximum-repeating-substring
 */
export function maxRepeating(sequence: string, word: string): number {
  let maxRepeat = 0;
  while (sequence.includes(word.repeat(maxRepeat + 1))) {
    maxRepeat += 1;
  }
  return maxRepeat;
}
