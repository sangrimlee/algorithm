import { isCovered } from './1893';

describe('LeetCode 1893', () => {
  test('Example 1', () => {
    expect(
      isCovered(
        [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
        2,
        5,
      ),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      isCovered(
        [
          [1, 10],
          [10, 20],
        ],
        21,
        21,
      ),
    ).toBe(false);
  });
});
