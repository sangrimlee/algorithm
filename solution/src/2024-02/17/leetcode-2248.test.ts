import { intersection } from './leetcode-2248';

describe('2024-02-17: LeetCode 2248', () => {
  test('Example 1', () => {
    expect(
      intersection([
        [3, 1, 2, 4, 5],
        [1, 2, 3, 4],
        [3, 4, 5, 6],
      ]),
    ).toEqual([3, 4]);
  });
  test('Example 2', () => {
    expect(
      intersection([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([]);
  });
});
