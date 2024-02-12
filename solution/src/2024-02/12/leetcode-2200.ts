/**
 * 2200. Find All K-Distant Indices in an Array
 * https://leetcode.com/problems/find-all-k-distant-indices-in-an-array
 */
export function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const n = nums.length;
  const answer: number[] = [];

  let currentIndex = 0;
  for (let pivot = 0; pivot < n; pivot++) {
    if (nums[pivot] !== key) continue;
    currentIndex = Math.max(currentIndex, pivot - k);
    const lastIndex = Math.min(pivot + k, n - 1);
    while (currentIndex <= lastIndex) {
      answer.push(currentIndex);
      currentIndex += 1;
    }
  }
  return answer;
}
