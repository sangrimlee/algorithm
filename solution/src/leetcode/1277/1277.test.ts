import { countSquares } from './1277';

describe('LeetCode 1277', () => {
  test('Example 1', () => {
    expect(
      countSquares([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1],
      ]),
    ).toBe(15);
  });
  test('Example 2', () => {
    expect(
      countSquares([
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 0],
      ]),
    ).toBe(7);
  });
});
