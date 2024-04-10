/**
 * 2815. Max Pair Sum in an Array
 * https://leetcode.com/problems/max-pair-sum-in-an-array
 */
export function maxSum(nums: number[]): number {
  function getMaxDigit(num: number) {
    let maxDigit = 0;
    while (0 < num) {
      maxDigit = Math.max(maxDigit, num % 10);
      num = Math.floor(num / 10);
    }
    return maxDigit;
  }

  let answer = -1;
  const maxByDigit = new Map<number, number>();
  for (const num of nums) {
    const maxDigit = getMaxDigit(num);
    const prevMaxNum = maxByDigit.get(maxDigit);
    if (prevMaxNum !== undefined) {
      answer = Math.max(answer, prevMaxNum + num);
      maxByDigit.set(maxDigit, Math.max(prevMaxNum, num));
    } else {
      maxByDigit.set(maxDigit, num);
    }
  }
  return answer;
}
