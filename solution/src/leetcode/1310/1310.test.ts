import { xorQueries } from './1310';

describe('LeetCode 1310', () => {
  test('Example 1', () => {
    expect(
      xorQueries(
        [1, 3, 4, 8],
        [
          [0, 1],
          [1, 2],
          [0, 3],
          [3, 3],
        ],
      ),
    ).toEqual([2, 7, 14, 8]);
  });
  test('Example 2', () => {
    expect(
      xorQueries(
        [4, 8, 2, 10],
        [
          [2, 3],
          [1, 3],
          [0, 0],
          [0, 3],
        ],
      ),
    ).toEqual([8, 0, 4, 4]);
  });
});
