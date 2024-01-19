import { maximumGap } from './leetcode-164';

describe('2024-01-19: LeetCode 164', () => {
  test('Example 1', () => {
    expect(maximumGap([3, 6, 9, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(maximumGap([10])).toBe(0);
  });
});
