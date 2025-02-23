import { queensAttacktheKing } from './1222';

describe('LeetCode 1222', () => {
  test('Example 1', () => {
    expect(
      queensAttacktheKing(
        [
          [0, 1],
          [1, 0],
          [4, 0],
          [0, 4],
          [3, 3],
          [2, 4],
        ],
        [0, 0],
      ).sort(),
    ).toEqual([
      [0, 1],
      [1, 0],
      [3, 3],
    ]);
  });
  test('Example 2', () => {
    expect(
      queensAttacktheKing(
        [
          [0, 0],
          [1, 1],
          [2, 2],
          [3, 4],
          [3, 5],
          [4, 4],
          [4, 5],
        ],
        [3, 3],
      ).sort(),
    ).toEqual([
      [2, 2],
      [3, 4],
      [4, 4],
    ]);
  });
});
