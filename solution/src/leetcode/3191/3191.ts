/**
 * 3191. Minimum Operations to Make Binary Array Elements Equal to One I
 * https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i
 */
export function minOperations(nums: number[]): number {
  const n = nums.length;

  let operations = 0;
  for (let i = 0; i <= n - 3; i++) {
    // 현재 요소가 0이라면 연속된 3개의 요소 뒤집기
    if (nums[i] === 0) {
      flip(nums, i);
      operations += 1;
    }
  }
  // 마지막 2개의 요소가 모두 1인지 확인.
  return nums[n - 2] === 1 && nums[n - 1] === 1 ? operations : -1;
}

function flip(nums: number[], start: number): void {
  nums[start] ^= 1;
  nums[start + 1] ^= 1;
  nums[start + 2] ^= 1;
}
