/**
 * 2678. Number of Senior Citizens
 * https://leetcode.com/problems/number-of-senior-citizens
 */
export function countSeniors(details: string[]): number {
  function isSenior(detail: string) {
    return 60 < parseInt(detail.substring(11, 13), 10);
  }
  return details.filter(isSenior).length;
}
