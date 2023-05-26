import { stoneGameII } from './leetcode-1140';

describe('2023-05-26: LeetCode 1140', () => {
  test('Example 1', () => {
    expect(stoneGameII([2, 7, 9, 4, 4])).toEqual(10);
  });
  test('Example 2', () => {
    expect(stoneGameII([1, 2, 3, 4, 5, 100])).toEqual(104);
  });
});
