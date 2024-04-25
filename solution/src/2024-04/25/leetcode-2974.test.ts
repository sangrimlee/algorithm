import { numberGame } from './leetcode-2974';

describe('2024-04-25: LeetCode 2974', () => {
  test('Example 1', () => {
    expect(numberGame([5, 4, 2, 3])).toEqual([3, 2, 5, 4]);
  });
  test('Example 2', () => {
    expect(numberGame([2, 5])).toEqual([5, 2]);
  });
});
