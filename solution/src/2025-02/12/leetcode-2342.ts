/**
 * 2342. Max Sum of a Pair With Equal Sum of Digits
 * https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits
 */
export function maximumSum(nums: number[]): number {
  let answer = -1;
  const maxNumBySum = new Map<number, number>();
  for (const num of nums) {
    const sum = sumOfDigits(num);
    const maxNum = maxNumBySum.get(sum) ?? 0;
    if (0 < maxNum) {
      answer = Math.max(answer, maxNum + num);
    }
    maxNumBySum.set(sum, Math.max(maxNum, num));
  }
  return answer;
}

function sumOfDigits(num: number) {
  let sum = 0;
  let curr = num;
  while (0 < curr) {
    sum += curr % 10;
    curr = Math.floor(curr / 10);
  }
  return sum;
}
