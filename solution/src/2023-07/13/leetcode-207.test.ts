import { canFinish } from './leetcode-207';

describe('2023-07-13: LeetCode 207', () => {
  test('Example 1', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });
  test('Example 2', () => {
    expect(
      canFinish(2, [
        [1, 0],
        [0, 1],
      ]),
    ).toBe(false);
  });
});
