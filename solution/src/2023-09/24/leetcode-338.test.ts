import { countBits } from './leetcode-338';

describe('2023-09-24: LeetCode 338', () => {
  test('Example 1', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });
  test('Example 2', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
