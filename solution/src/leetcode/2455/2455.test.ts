import { averageValue } from './2455';

describe('LeetCode 2455', () => {
  test('Example 1', () => {
    expect(averageValue([1, 3, 6, 10, 12, 15])).toBe(9);
  });
  test('Example 2', () => {
    expect(averageValue([1, 2, 4, 7, 10])).toBe(0);
  });
});
