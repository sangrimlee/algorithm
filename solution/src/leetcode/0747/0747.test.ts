import { dominantIndex } from './0747';

describe('LeetCode 0747', () => {
  test('Example 1', () => {
    expect(dominantIndex([3, 6, 1, 0])).toBe(1);
  });
  test('Example 2', () => {
    expect(dominantIndex([1, 2, 3, 4])).toBe(-1);
  });
});
