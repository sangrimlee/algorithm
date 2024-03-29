/**
 * 448. Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
 */
export function findDisappearedNumbers(nums: number[]): number[] {
  let currentIndex = -1;
  for (const num of nums) {
    if (num < 0) {
      currentIndex = -num - 1;
    } else {
      currentIndex = num - 1;
    }
    if (0 < nums[currentIndex]) {
      nums[currentIndex] = -nums[currentIndex];
    }
  }

  const answer: number[] = [];
  nums.forEach((num, i) => {
    if (0 < num) {
      answer.push(i + 1);
    }
  });
  return answer;
}
