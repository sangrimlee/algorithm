import { minSteps } from './1347';

describe('LeetCode 1347', () => {
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
