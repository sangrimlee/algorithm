import { isFascinating } from './leetcode-2729';

describe('2024-04-03: LeetCode 2729', () => {
  test('Example 1', () => {
    expect(isFascinating(192)).toBe(true);
  });
  test('Example 2', () => {
    expect(isFascinating(100)).toBe(false);
  });
});
