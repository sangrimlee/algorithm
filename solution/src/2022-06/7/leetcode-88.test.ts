import { merge } from './leetcode-88';

describe('2022-06-07: LeetCode 88', () => {
  test('Example 1', () => {
    const nums1: number[] = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2: number[] = [2, 5, 6];
    const n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test('Example 2', () => {
    const nums1: number[] = [1];
    const m = 1;
    const nums2: number[] = [];
    const n = 0;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  test('Example 3', () => {
    const nums1: number[] = [0];
    const m = 0;
    const nums2: number[] = [1];
    const n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });
});
