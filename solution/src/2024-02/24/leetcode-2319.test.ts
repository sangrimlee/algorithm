import { checkXMatrix } from './leetcode-2319';

describe('2024-02-24: LeetCode 2319', () => {
  test('Example 1', () => {
    expect(
      checkXMatrix([
        [2, 0, 0, 1],
        [0, 3, 1, 0],
        [0, 5, 2, 0],
        [4, 0, 0, 2],
      ]),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      checkXMatrix([
        [5, 7, 0],
        [0, 3, 1],
        [0, 5, 0],
      ]),
    ).toBe(false);
  });
});
