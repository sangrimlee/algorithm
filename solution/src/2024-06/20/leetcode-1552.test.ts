import { maxDistance } from './leetcode-1552';

describe('2024-06-20: LeetCode 1552', () => {
  test('Example 1', () => {
    expect(maxDistance([1, 2, 3, 4, 7], 3)).toBe(3);
  });
  test('Example 2', () => {
    expect(maxDistance([5, 4, 3, 2, 1, 1000000000], 2)).toBe(999999999);
  });
});
