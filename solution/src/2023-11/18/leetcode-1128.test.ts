import { numEquivDominoPairs } from './leetcode-1128';

describe('2023-11-18: LeetCode 1128', () => {
  test('Example 1', () => {
    expect(
      numEquivDominoPairs([
        [1, 2],
        [2, 1],
        [3, 4],
        [5, 6],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      numEquivDominoPairs([
        [1, 2],
        [1, 2],
        [1, 1],
        [1, 2],
        [2, 2],
      ]),
    ).toBe(3);
  });
});
