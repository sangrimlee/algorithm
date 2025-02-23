/**
 * 3028. Ant on the Boundary
 * https://leetcode.com/problems/ant-on-the-boundary
 */
export function returnToBoundaryCount(nums: number[]): number {
  let answer = 0;
  let step = 0;
  for (const num of nums) {
    step += num;
    if (step === 0) {
      answer += 1;
    }
  }
  return answer;
}
