import { isArraySpecial } from './3152';

describe('LeetCode 3152', () => {
  test('Example 1', () => {
    expect(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]])).toEqual([false]);
  });
  test('Example 2', () => {
    expect(
      isArraySpecial(
        [4, 3, 1, 6],
        [
          [0, 2],
          [2, 3],
        ],
      ),
    ).toEqual([false, true]);
  });
});
