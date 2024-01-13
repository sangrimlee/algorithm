import { minSteps } from './leetcode-1347';

describe('2024-01-13: LeetCode 1347', () => {
  test('Example 1', () => {
    expect(minSteps('bab', 'aba')).toBe(1);
  });
  test('Example 2', () => {
    expect(minSteps('leetcode', 'practice')).toBe(5);
  });
  test('Example 3', () => {
    expect(minSteps('anagram', 'mangaar')).toBe(0);
  });
});
