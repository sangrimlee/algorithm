/**
 * 1424. Diagonal Traverse II
 * https://leetcode.com/problems/diagonal-traverse-ii
 */
export function findDiagonalOrder(nums: number[][]): number[] {
  const answer: number[] = [];

  let queue: number[][] = [[0, 0]];
  while (0 < queue.length) {
    const nextQueue: number[][] = [];
    for (const [row, col] of queue) {
      answer.push(nums[row][col]);
      if (col === 0 && row + 1 < nums.length) {
        nextQueue.push([row + 1, col]);
      }
      if (col + 1 < nums[row].length) {
        nextQueue.push([row, col + 1]);
      }
    }
    queue = nextQueue;
  }
  return answer;
}
