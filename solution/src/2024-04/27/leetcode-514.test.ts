import { findRotateSteps } from './leetcode-514';

describe('2024-04-27: LeetCode 514', () => {
  test('Example 1', () => {
    expect(findRotateSteps('godding', 'gd')).toBe(4);
  });
  test('Example 2', () => {
    expect(findRotateSteps('godding', 'godding')).toBe(13);
  });
});
