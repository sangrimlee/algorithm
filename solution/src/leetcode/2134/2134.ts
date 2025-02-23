/**
 * 2134. Minimum Swaps to Group All 1's Together II
 * https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii
 */
export function minSwaps(nums: number[]): number {
  const n = nums.length;
  const totalOneCount = nums.reduce((acc, num) => acc + num, 0);

  let answer = n;
  let oneCount = 0;
  let [start, end] = [0, 0];
  while (start < n) {
    while (end - start < totalOneCount) {
      oneCount += nums[end % n];
      end += 1;
    }
    answer = Math.min(answer, totalOneCount - oneCount);
    oneCount -= nums[start];
    start += 1;
  }
  return answer;
}
