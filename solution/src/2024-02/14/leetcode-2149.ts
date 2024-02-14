/**
 * 2149. Rearrange Array Elements by Sign
 * https://leetcode.com/problems/rearrange-array-elements-by-sign
 */
export function rearrangeArray(nums: number[]): number[] {
  const answer: number[] = [];

  let [positive, negative] = [0, 0];
  for (const num of nums) {
    if (0 < num) {
      answer[2 * positive] = num;
      positive += 1;
    } else {
      answer[2 * negative + 1] = num;
      negative += 1;
    }
  }
  return answer;
}
