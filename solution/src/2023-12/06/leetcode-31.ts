/**
 * 31. Next Permutation
 * https://leetcode.com/problems/next-permutation
 */
export function nextPermutation(nums: number[]): void {
  const n = nums.length;
  const swap = (i: number, j: number) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };
  const reverse = (startIndex = 0) => {
    let [i, j] = [startIndex, n - 1];
    while (i < j) {
      swap(i, j);
      i += 1;
      j -= 1;
    }
  };

  let start = n - 2;
  while (0 <= start && nums[start + 1] <= nums[start]) {
    start -= 1;
  }
  if (start === -1) {
    reverse();
    return;
  }
  let end = n - 1;
  while (nums[end] < nums[start]) {
    end -= 1;
  }
  swap(start, end);
  reverse(start + 1);
}
