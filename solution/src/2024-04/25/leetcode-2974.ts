/**
 * 2974. Minimum Number Game
 * https://leetcode.com/problems/minimum-number-game
 */
export function numberGame(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const answer: number[] = [];
  for (let i = 0; i < nums.length; i += 2) {
    answer.push(nums[i + 1]);
    answer.push(nums[i]);
  }
  return answer;
}
