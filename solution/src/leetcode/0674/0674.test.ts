import { findLengthOfLCIS } from './0674';

describe('LeetCode 0674', () => {
  test('Example 1', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
  });
  test('Example 2', () => {
    expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
  });
  test('Example 3', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 6, 8, 10])).toBe(4);
  });
});
