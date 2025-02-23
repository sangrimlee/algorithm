/**
 * 1859. Sorting the Sentence
 * https://leetcode.com/problems/sorting-the-sentence/
 */
export function sortSentence(s: string): string {
  const sortByIndex = (a: string, b: string) => {
    return parseInt(a[a.length - 1]) - parseInt(b[b.length - 1]);
  };
  const removeIndex = (s: string) => s.substring(0, s.length - 1);
  return s.split(' ').sort(sortByIndex).map(removeIndex).join(' ');
}
