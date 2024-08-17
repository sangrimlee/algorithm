import { maxPoints } from './leetcode-1937';

describe('2024-08-17: LeetCode 1937', () => {
  test('Example 1', () => {
    expect(
      maxPoints([
        [1, 2, 3],
        [1, 5, 1],
        [3, 1, 1],
      ]),
    ).toBe(9);
  });
  test('Example 2', () => {
    expect(
      maxPoints([
        [1, 5],
        [2, 3],
        [4, 2],
      ]),
    ).toBe(11);
  });
});
