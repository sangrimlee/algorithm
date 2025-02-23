import { countUnguarded } from './2257';

describe('LeetCode 2257', () => {
  test('Example 1', () => {
    expect(
      countUnguarded(
        4,
        6,
        [
          [0, 0],
          [1, 1],
          [2, 3],
        ],
        [
          [0, 1],
          [2, 2],
          [1, 4],
        ],
      ),
    ).toBe(7);
  });
  test('Example 2', () => {
    expect(
      countUnguarded(
        3,
        3,
        [[1, 1]],
        [
          [0, 1],
          [1, 0],
          [2, 1],
          [1, 2],
        ],
      ),
    ).toBe(4);
  });
});
