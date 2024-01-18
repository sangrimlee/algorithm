import { minTimeToType } from './leetcode-1974';

describe('2024-01-18: LeetCode 1974', () => {
  test('Example 1', () => {
    expect(minTimeToType('abc')).toBe(5);
  });
  test('Example 2', () => {
    expect(minTimeToType('bza')).toBe(7);
  });
  test('Example 3', () => {
    expect(minTimeToType('zjpc')).toBe(34);
  });
});
