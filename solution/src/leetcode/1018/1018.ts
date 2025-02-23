/**
 * 1018. Binary Prefix Divisible By 5
 * https://leetcode.com/problems/binary-prefix-divisible-by-5
 */
export function prefixesDivBy5(nums: number[]): boolean[] {
  const answer: boolean[] = [];
  let currentNum = 0;
  for (const num of nums) {
    currentNum = ((currentNum << 1) + num) % 5;
    answer.push(currentNum === 0);
  }
  return answer;
}
