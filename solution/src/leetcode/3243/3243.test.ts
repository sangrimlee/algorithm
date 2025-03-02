import { shortestDistanceAfterQueries } from './3243';

describe('LeetCode 3243', () => {
  test('Example 1', () => {
    expect(
      shortestDistanceAfterQueries(5, [
        [2, 4],
        [0, 2],
        [0, 4],
      ]),
    ).toEqual([3, 2, 1]);
  });
  test('Example 2', () => {
    expect(
      shortestDistanceAfterQueries(4, [
        [0, 3],
        [0, 2],
      ]),
    ).toEqual([1, 1]);
  });
});
