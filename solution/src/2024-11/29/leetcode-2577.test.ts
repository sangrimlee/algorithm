import { minimumTime } from './leetcode-2577';

describe('2024-11-29: LeetCode 2577', () => {
  test('Example 1', () => {
    expect(
      minimumTime([
        [0, 1, 3, 2],
        [5, 1, 2, 5],
        [4, 3, 8, 6],
      ]),
    ).toBe(7);
  });
  test('Example 2', () => {
    expect(
      minimumTime([
        [0, 2, 4],
        [3, 2, 1],
        [1, 0, 4],
      ]),
    ).toBe(-1);
  });
});
