import { minZeroArray } from './3356';

describe('LeetCode 3356', () => {
  test('Example 1', () => {
    expect(
      minZeroArray(
        [2, 0, 2],
        [
          [0, 2, 1],
          [0, 2, 1],
          [1, 1, 3],
        ],
      ),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      minZeroArray(
        [4, 3, 2, 1],
        [
          [1, 3, 2],
          [0, 2, 1],
        ],
      ),
    ).toBe(-1);
  });
});
