import { checkStraightLine } from './1232';

describe('LeetCode 1232', () => {
  test('Example 1', () => {
    expect(
      checkStraightLine([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
      ]),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      checkStraightLine([
        [1, 1],
        [2, 2],
        [3, 4],
        [4, 5],
        [5, 6],
        [7, 7],
      ]),
    ).toBe(false);
  });
});
