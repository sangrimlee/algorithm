/**
 * 985. Sum of Even Numbers After Queries
 * https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 */
export function reverseWords(s: string): string {
  const BLANK = '';
  const SPACE = ' ';
  const reverseWord = (word: string) => [...word].reverse().join(BLANK);
  return s.split(SPACE).map(reverseWord).join(SPACE);
}
