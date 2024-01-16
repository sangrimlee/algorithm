/**
 * 1957. Delete Characters to Make Fancy String
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string
 */
export function makeFancyString(s: string): string {
  let answer = '';

  let current = '';
  let consecutive = 0;
  for (const char of s) {
    if (current !== char) {
      answer += current.repeat(Math.min(2, consecutive));
      current = char;
      consecutive = 1;
    } else {
      consecutive += 1;
    }
  }
  answer += current.repeat(Math.min(2, consecutive));
  return answer;
}
