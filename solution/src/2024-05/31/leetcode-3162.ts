/**
 * 3162. Find the Number of Good Pairs I
 * https://leetcode.com/problems/find-the-number-of-good-pairs-i
 */
export function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  function isGoodPair(num1: number, num2: number) {
    return num1 % (num2 * k) === 0;
  }
  return nums1.reduce(
    (prev, num1) => prev + nums2.filter((num2) => isGoodPair(num1, num2)).length,
    0,
  );
}
