import { findingUsersActiveMinutes } from './leetcode-1817';

describe('2024-04-10: LeetCode 1817', () => {
  test('Example 1', () => {
    expect(
      findingUsersActiveMinutes(
        [
          [0, 5],
          [1, 2],
          [0, 2],
          [0, 5],
          [1, 3],
        ],
        5,
      ),
    ).toEqual([0, 2, 0, 0, 0]);
  });
  test('Example 2', () => {
    expect(
      findingUsersActiveMinutes(
        [
          [1, 1],
          [2, 2],
          [2, 3],
        ],
        4,
      ),
    ).toEqual([1, 1, 0, 0]);
  });
});
