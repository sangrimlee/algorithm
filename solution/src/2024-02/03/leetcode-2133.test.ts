import { checkValid } from './leetcode-2133';

describe('2024-02-03: LeetCode 2133', () => {
  test('Example 1', () => {
    expect(
      checkValid([
        [1, 2, 3],
        [3, 1, 2],
        [2, 3, 1],
      ]),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      checkValid([
        [1, 1, 1],
        [1, 2, 3],
        [1, 2, 3],
      ]),
    ).toBe(false);
  });
});
