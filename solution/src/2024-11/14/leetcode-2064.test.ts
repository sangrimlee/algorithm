import { minimizedMaximum } from './leetcode-2064';

describe('2024-11-14: LeetCode 2064', () => {
  test('Example 1', () => {
    expect(minimizedMaximum(6, [11, 6])).toBe(3);
  });
  test('Example 2', () => {
    expect(minimizedMaximum(7, [15, 10, 10])).toBe(5);
  });
  test('Example 3', () => {
    expect(minimizedMaximum(1, [100000])).toBe(100000);
  });
});
