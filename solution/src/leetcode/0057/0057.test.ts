import { insert } from './0057';

describe('LeetCode 0057', () => {
  test('Example 1', () => {
    expect(
      insert(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5],
      ),
    ).toEqual([
      [1, 5],
      [6, 9],
    ]);
  });
  test('Example 2', () => {
    expect(
      insert(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8],
      ),
    ).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });
});
