import { getMaximumGenerated } from './leetcode-1646';

describe('2023-12-17: LeetCode 1646', () => {
  test('Example 1', () => {
    expect(getMaximumGenerated(7)).toBe(3);
  });
  test('Example 2', () => {
    expect(getMaximumGenerated(2)).toBe(1);
  });
  test('Example 3', () => {
    expect(getMaximumGenerated(3)).toBe(2);
  });
});
