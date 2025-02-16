import { isBipartite } from './leetcode-785';

describe('2023-05-19: LeetCode 785', () => {
  test('Example 1', () => {
    expect(
      isBipartite([
        [1, 2, 3],
        [0, 2],
        [0, 1, 3],
        [0, 2],
      ]),
    ).toBe(false);
  });
  test('Example 2', () => {
    expect(
      isBipartite([
        [1, 3],
        [0, 2],
        [1, 3],
        [0, 2],
      ]),
    ).toBe(true);
  });
});
