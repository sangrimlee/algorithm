/**
 * 989. Add to Array-Form of Integer
 * https://leetcode.com/problems/add-to-array-form-of-integer
 */
export function addToArrayForm(nums: number[], k: number): number[] {
  const n = nums.length;

  let remain = k;
  const answer = [];
  for (let i = n - 1; 0 <= i; i--) {
    const sum = nums[i] + (remain % 10);
    remain = Math.floor(remain / 10) + Math.floor(sum / 10);
    answer.push(sum % 10);
  }
  while (0 < remain) {
    answer.push(remain % 10);
    remain = Math.floor(remain / 10);
  }
  return answer.reverse();
}
