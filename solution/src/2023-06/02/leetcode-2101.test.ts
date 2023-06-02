import { maximumDetonation } from './leetcode-2101';

describe('2023-06-02: LeetCode 2101', () => {
  test('Example 1', () => {
    expect(
      maximumDetonation([
        [2, 1, 3],
        [6, 1, 4],
      ]),
    ).toEqual(2);
  });
  test('Example 2', () => {
    expect(
      maximumDetonation([
        [1, 1, 5],
        [10, 10, 5],
      ]),
    ).toEqual(1);
  });
  test('Example 3', () => {
    expect(
      maximumDetonation([
        [1, 2, 3],
        [2, 3, 1],
        [3, 4, 2],
        [4, 5, 3],
        [5, 6, 4],
      ]),
    ).toEqual(5);
  });
});
