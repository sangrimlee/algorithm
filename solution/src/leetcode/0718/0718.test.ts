import { findLength } from './0718';

describe('LeetCode 0718', () => {
  test('Example 1', () => {
    const nums1 = [1, 2, 3, 2, 1];
    const nums2 = [3, 2, 1, 4, 7];
    expect(findLength(nums1, nums2)).toBe(3);
  });

  test('Example 2', () => {
    const nums1 = [0, 0, 0, 0, 0];
    const nums2 = [0, 0, 0, 0, 0];
    expect(findLength(nums1, nums2)).toBe(5);
  });
});
