import { minSteps } from './leetcode-2186';

describe('2024-09-13: LeetCode 2186', () => {
  test('Example 1', () => {
    expect(minSteps('leetcode', 'coats')).toBe(7);
  });
  test('Example 2', () => {
    expect(minSteps('night', 'thing')).toBe(0);
  });
});
