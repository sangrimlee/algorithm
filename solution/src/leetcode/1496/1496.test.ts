import { isPathCrossing } from './1496';

describe('LeetCode 1496', () => {
  test('Example 1', () => {
    expect(isPathCrossing('NES')).toBe(false);
  });
  test('Example 2', () => {
    expect(isPathCrossing('NESWW')).toBe(true);
  });
});
