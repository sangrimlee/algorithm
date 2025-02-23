import { findKthLargest } from './0215';

describe('LeetCode 0215', () => {
  test('Example 1', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  test('Example 2', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
});
