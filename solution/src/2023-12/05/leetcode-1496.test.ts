import { isPathCrossing } from './leetcode-1496';

describe('2023-12-05: LeetCode 1496', () => {
  test('Example 1', () => {
    expect(isPathCrossing('NES')).toBe(false);
  });
  test('Example 2', () => {
    expect(isPathCrossing('NESWW')).toBe(true);
  });
});
