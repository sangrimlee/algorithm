/**
 * 2610. Convert an Array Into a 2D Array With Conditions
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions
 */
export function findMatrix(nums: number[]): number[][] {
  const indicies = new Map<number, number>();

  const answer: number[][] = [];
  for (const num of nums) {
    const index = indicies.get(num) ?? 0;
    if (answer.length <= index) {
      answer[index] = [];
    }
    answer[index].push(num);
    indicies.set(num, index + 1);
  }
  return answer;
}
