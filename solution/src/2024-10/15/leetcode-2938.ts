/**
 * 2938. Separate Black and White Balls
 * https://leetcode.com/problems/separate-black-and-white-balls
 */
export function minimumSteps(s: string): number {
  let answer = 0;
  let oneCount = 0;
  for (const char of s) {
    if (char === '1') {
      oneCount += 1;
    } else {
      answer += oneCount;
    }
  }
  return answer;
}
