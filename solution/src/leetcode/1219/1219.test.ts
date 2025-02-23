import { getMaximumGold } from './1219';

describe('LeetCode 1219', () => {
  test('Example 1', () => {
    expect(
      getMaximumGold([
        [0, 6, 0],
        [5, 8, 7],
        [0, 9, 0],
      ]),
    ).toBe(24);
  });
  test('Example 2', () => {
    expect(
      getMaximumGold([
        [1, 0, 7],
        [2, 0, 6],
        [3, 4, 5],
        [0, 3, 0],
        [9, 0, 20],
      ]),
    ).toBe(28);
  });
});
