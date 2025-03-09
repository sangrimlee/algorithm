/**
 * 2161. Partition Array According to Given Pivot
 * https://leetcode.com/problems/partition-array-according-to-given-pivot
 */
export function pivotArray(nums: number[], pivot: number): number[] {
  const n = nums.length;
  const answer = new Array<number>(n).fill(0);

  let lessIndex = 0;
  let greaterIndex = n - 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < pivot) {
      answer[lessIndex] = nums[i];
      lessIndex += 1;
    }
    if (nums[n - i - 1] > pivot) {
      answer[greaterIndex] = nums[n - i - 1];
      greaterIndex -= 1;
    }
  }
  while (lessIndex <= greaterIndex) {
    answer[lessIndex] = pivot;
    lessIndex += 1;
  }
  return answer;
}
