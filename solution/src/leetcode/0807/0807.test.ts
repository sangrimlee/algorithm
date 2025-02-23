import { maxIncreaseKeepingSkyline } from './0807';

describe('LeetCode 0807', () => {
  test('Example 1', () => {
    expect(
      maxIncreaseKeepingSkyline([
        [3, 0, 8, 4],
        [2, 4, 5, 7],
        [9, 2, 6, 3],
        [0, 3, 1, 0],
      ]),
    ).toBe(35);
  });
  test('Example 2', () => {
    expect(
      maxIncreaseKeepingSkyline([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]),
    ).toBe(0);
  });
});
