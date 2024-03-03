import { equalFrequency } from './leetcode-2423';

describe('2024-03-03: LeetCode 2423', () => {
  test('Example 1', () => {
    expect(equalFrequency('abcc')).toBe(true);
  });
  test('Example 2', () => {
    expect(equalFrequency('aazz')).toBe(false);
  });
});
