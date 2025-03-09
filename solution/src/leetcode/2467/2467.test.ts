import { mostProfitablePath } from './2467';

describe('LeetCode 2467', () => {
  test('Example 1', () => {
    expect(
      mostProfitablePath(
        [
          [0, 1],
          [1, 2],
          [1, 3],
          [3, 4],
        ],
        3,
        [-2, 4, 2, -4, 6],
      ),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(mostProfitablePath([[0, 1]], 1, [-7280, 2350])).toBe(-7280);
  });
});
