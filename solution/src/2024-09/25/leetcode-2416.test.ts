import { sumPrefixScores } from './leetcode-2416';

describe('2024-09-25: LeetCode 2416', () => {
  test('Example 1', () => {
    expect(sumPrefixScores(['abc', 'ab', 'bc', 'b'])).toEqual([5, 4, 3, 2]);
  });
  test('Example 2', () => {
    expect(sumPrefixScores(['abcd'])).toEqual([4]);
  });
});
