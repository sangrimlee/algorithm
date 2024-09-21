import { lexicalOrder } from './leetcode-386';

describe('2024-09-21: LeetCode 386', () => {
  test('Example 1', () => {
    expect(lexicalOrder(13)).toEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('Example 2', () => {
    expect(lexicalOrder(2)).toEqual([1, 2]);
  });
});
