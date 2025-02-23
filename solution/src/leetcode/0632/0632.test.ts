import { smallestRange } from './0632';

describe('LeetCode 0632', () => {
  test('Example 1', () => {
    expect(
      smallestRange([
        [4, 10, 15, 24, 26],
        [0, 9, 12, 20],
        [5, 18, 22, 30],
      ]),
    ).toEqual([20, 24]);
  });
  test('Example 2', () => {
    expect(
      smallestRange([
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
      ]),
    ).toEqual([1, 1]);
  });
});
