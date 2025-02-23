import { findRotateSteps } from './0514';

describe('LeetCode 0514', () => {
  test('Example 1', () => {
    expect(findRotateSteps('godding', 'gd')).toBe(4);
  });
  test('Example 2', () => {
    expect(findRotateSteps('godding', 'godding')).toBe(13);
  });
});
