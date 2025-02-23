import { countGraph } from './258711';

describe('Programmers 258711', () => {
  test('Example 1', () => {
    expect(
      countGraph([
        [2, 3],
        [4, 3],
        [1, 1],
        [2, 1],
      ]),
    ).toEqual([2, 1, 1, 0]);
  });
  test('Example 2', () => {
    expect(
      countGraph([
        [4, 11],
        [1, 12],
        [8, 3],
        [12, 7],
        [4, 2],
        [7, 11],
        [4, 8],
        [9, 6],
        [10, 11],
        [6, 10],
        [3, 5],
        [11, 1],
        [5, 3],
        [11, 9],
        [3, 8],
      ]),
    ).toEqual([4, 0, 1, 2]);
  });
});
