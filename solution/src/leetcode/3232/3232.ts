/**
 * 3232. Find if Digit Game Can Be Won
 * https://leetcode.com/problems/find-if-digit-game-can-be-won
 */
export function canAliceWin(nums: number[]): boolean {
  return nums.reduce((acc, num) => (num < 10 ? acc + num : acc - num), 0) !== 0;
}
