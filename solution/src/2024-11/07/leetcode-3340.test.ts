import { isBalanced } from './leetcode-3340';

describe('2024-11-07: LeetCode 3340', () => {
  test('Example 1', () => {
    expect(isBalanced('1234')).toBe(false);
  });
  test('Example 2', () => {
    expect(isBalanced('24123')).toBe(true);
  });
});
