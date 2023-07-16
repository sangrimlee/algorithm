/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self
 */
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array<number>(n).fill(1);

  // 누적 곱을 처음에서 시작하는 것과 뒤에서 시작하는 것을 한 번의 반복으로 계산
  let [prefix, suffix] = [1, 1];
  for (let i = 0; i < n; i++) {
    answer[i] *= prefix;
    prefix *= nums[i];

    answer[n - i - 1] *= suffix;
    suffix *= nums[n - i - 1];
  }
  return answer;
}
