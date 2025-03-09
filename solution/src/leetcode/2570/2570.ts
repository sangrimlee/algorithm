/**
 * 2570. Merge Two 2D Arrays by Summing Values
 * https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values
 */
export function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const answer: number[][] = [];
  const [m, n] = [nums1.length, nums2.length];

  let [i, j] = [0, 0];
  while (i < m && j < n) {
    if (nums1[i][0] < nums2[j][0]) {
      answer.push(nums1[i]);
      i += 1;
    } else if (nums1[i][0] > nums2[j][0]) {
      answer.push(nums2[j]);
      j += 1;
    } else {
      answer.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i += 1;
      j += 1;
    }
  }
  while (i < m) {
    answer.push(nums1[i]);
    i += 1;
  }
  while (j < n) {
    answer.push(nums2[j]);
    j += 1;
  }
  return answer;
}
