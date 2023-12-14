import { minDistance } from './leetcode-72';

describe('2023-12-13: LeetCode 72', () => {
  test('Example 1', () => {
    expect(minDistance('horse', 'ros')).toBe(3);
  });
  test('Example 2', () => {
    expect(minDistance('intention', 'execution')).toBe(5);
  });
});
