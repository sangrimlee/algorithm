/**
 * 791. Custom Sort String
 * https://leetcode.com/problems/custom-sort-string
 */
export function customSortString(order: string, s: string): string {
  const counter = new Map<string, number>();
  for (const char of s) {
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }

  let answer = '';
  for (const char of order) {
    const count = counter.get(char) ?? 0;
    answer += char.repeat(count);
    counter.delete(char);
  }
  for (const [char, count] of counter) {
    answer += char.repeat(count);
  }
  return answer;
}
