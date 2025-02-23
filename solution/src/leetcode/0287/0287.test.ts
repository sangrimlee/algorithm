import { findDuplicate } from './0287';

describe('LeetCode 0287', () => {
  test('Example 1', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });
  test('Example 2', () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });
});
