import { minSteps } from './2186';

describe('LeetCode 2186', () => {
  test('Example 1', () => {
    expect(minSteps('leetcode', 'coats')).toBe(7);
  });
  test('Example 2', () => {
    expect(minSteps('night', 'thing')).toBe(0);
  });
});
