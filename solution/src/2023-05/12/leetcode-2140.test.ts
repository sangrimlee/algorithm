import { mostPoints } from './leetcode-2140';

describe('2023-05-12: LeetCode 2140', () => {
  test('Example 1', () => {
    expect(
      mostPoints([
        [3, 2],
        [4, 3],
        [4, 4],
        [2, 5],
      ]),
    ).toBe(5);
  });

  test('Example 2', () => {
    expect(
      mostPoints([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
      ]),
    ).toBe(7);
  });
});
