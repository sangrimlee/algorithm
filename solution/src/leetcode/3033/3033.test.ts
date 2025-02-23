import { modifiedMatrix } from './3033';

describe('LeetCode 3033', () => {
  test('Example 1', () => {
    expect(
      modifiedMatrix([
        [1, 2, -1],
        [4, -1, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [1, 2, 9],
      [4, 8, 6],
      [7, 8, 9],
    ]);
  });
  test('Example 2', () => {
    expect(
      modifiedMatrix([
        [3, -1],
        [5, 2],
      ]),
    ).toEqual([
      [3, 2],
      [5, 2],
    ]);
  });
});
