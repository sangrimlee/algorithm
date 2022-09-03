import { numsSameConsecDiff } from './leetcode-967';

describe('2022-09-03: LeetCode 967', () => {
  test('Example 1', () => {
    const n = 3,
      k = 7;
    const answer = [181, 292, 707, 818, 929];
    expect(numsSameConsecDiff(n, k)).toEqual(answer);
  });

  test('Example 2', () => {
    const n = 2,
      k = 1;
    const answer = [
      10, 12, 21, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98,
    ];
    expect(numsSameConsecDiff(n, k)).toEqual(answer);
  });
});
