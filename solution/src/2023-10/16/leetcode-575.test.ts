import { distributeCandies } from './leetcode-575';

describe('2023-10-16: LeetCode 575', () => {
  test('Example 1', () => {
    expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(distributeCandies([1, 1, 2, 3])).toBe(2);
  });
  test('Example 3', () => {
    expect(distributeCandies([6, 6, 6, 6])).toBe(1);
  });
});
