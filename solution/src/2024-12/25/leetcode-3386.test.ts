import { buttonWithLongestTime } from './leetcode-3386';

describe('2024-12-25: LeetCode 3386', () => {
  test('Example 1', () => {
    expect(
      buttonWithLongestTime([
        [1, 2],
        [2, 5],
        [3, 9],
        [1, 15],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      buttonWithLongestTime([
        [10, 5],
        [1, 7],
      ]),
    ).toBe(10);
  });
});
