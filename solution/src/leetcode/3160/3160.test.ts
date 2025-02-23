import { queryResults } from './3160';

describe('LeetCode 3160', () => {
  test('Example 1', () => {
    expect(
      queryResults(4, [
        [1, 4],
        [2, 5],
        [1, 3],
        [3, 4],
      ]),
    ).toEqual([1, 2, 2, 3]);
  });
  test('Example 2', () => {
    expect(
      queryResults(4, [
        [0, 1],
        [1, 2],
        [2, 2],
        [3, 4],
        [4, 5],
      ]),
    ).toEqual([1, 2, 2, 3, 4]);
  });
});
