/**
 * 769. Max Chunks To Make Sorted
 * https://leetcode.com/problems/max-chunks-to-make-sorted
 */
export function maxChunksToSorted(arr: number[]): number {
  let answer = 0;
  let [prefixSum, targetSum] = [0, 0];
  arr.forEach((num, i) => {
    prefixSum += num;
    targetSum += i;
    if (prefixSum === targetSum) {
      answer += 1;
    }
  });
  return answer;
}
