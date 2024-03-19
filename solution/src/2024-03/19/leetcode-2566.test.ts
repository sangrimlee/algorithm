import { minMaxDifference } from './leetcode-2566';

describe('2024-03-19: LeetCode 2566', () => {
  test('Example 1', () => {
    expect(minMaxDifference(11891)).toBe(99009);
  });
  test('Example 2', () => {
    expect(minMaxDifference(90)).toBe(99);
  });
});
