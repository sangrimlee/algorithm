import { winningPlayerCount } from './leetcode-3238';

describe('2024-08-05: LeetCode 3238', () => {
  test('Example 1', () => {
    expect(
      winningPlayerCount(4, [
        [0, 0],
        [1, 0],
        [1, 0],
        [2, 1],
        [2, 1],
        [2, 0],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      winningPlayerCount(5, [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
      ]),
    ).toBe(0);
  });
  test('Example 3', () => {
    expect(
      winningPlayerCount(5, [
        [1, 1],
        [2, 4],
        [2, 4],
        [2, 4],
      ]),
    ).toBe(1);
  });
});
