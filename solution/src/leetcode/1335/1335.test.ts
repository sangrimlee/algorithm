import { minDifficulty } from './1335';

describe('LeetCode 1335', () => {
  test('Example 1', () => {
    expect(minDifficulty([6, 5, 4, 3, 2, 1], 2)).toBe(7);
  });
  test('Example 2', () => {
    expect(minDifficulty([9, 9, 9], 4)).toBe(-1);
  });
  test('Example 3', () => {
    expect(minDifficulty([1, 1, 1], 3)).toBe(3);
  });
});
