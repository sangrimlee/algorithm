import { firstCompleteIndex } from './2661';

describe('LeetCode 2661', () => {
  test('Example 1', () => {
    expect(
      firstCompleteIndex(
        [1, 3, 4, 2],
        [
          [1, 4],
          [2, 3],
        ],
      ),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      firstCompleteIndex(
        [2, 8, 7, 4, 1, 3, 5, 6, 9],
        [
          [3, 2, 5],
          [1, 4, 6],
          [8, 7, 9],
        ],
      ),
    ).toBe(3);
  });
});
