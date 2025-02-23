/**
 * 1528. Shuffle String
 * https://leetcode.com/problems/shuffle-string
 */
export function restoreString(s: string, indices: number[]): string {
  const n = indices.length;
  const answer: string[] = new Array<string>(n).fill('');
  indices.forEach((index, i) => {
    answer[index] = s[i];
  });
  return answer.join('');
}
