import { maxValue } from './1751';

describe('LeetCode 1751', () => {
  test('Example 1', () => {
    expect(
      maxValue(
        [
          [1, 2, 4],
          [3, 4, 3],
          [2, 3, 1],
        ],
        2,
      ),
    ).toBe(7);
  });
  test('Example 2', () => {
    expect(
      maxValue(
        [
          [1, 2, 4],
          [3, 4, 3],
          [2, 3, 10],
        ],
        2,
      ),
    ).toBe(10);
  });
  test('Example 3', () => {
    expect(
      maxValue(
        [
          [1, 1, 1],
          [2, 2, 2],
          [3, 3, 3],
          [4, 4, 4],
        ],
        3,
      ),
    ).toBe(9);
  });
});
