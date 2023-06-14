import { equalPairs } from './leetcode-2352';

describe('2023-06-13: LeetCode 2352', () => {
  test('Example 1', () => {
    expect(
      equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
      ]),
    ).toEqual(1);
  });
  test('Example 2', () => {
    expect(
      equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
      ]),
    ).toEqual(3);
  });
});
