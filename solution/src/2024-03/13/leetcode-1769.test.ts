import { minOperations } from './leetcode-1769';

describe('2024-03-13: LeetCode 1769', () => {
  test('Example 1', () => {
    expect(minOperations('110')).toEqual([1, 1, 3]);
  });
  test('Example 2', () => {
    expect(minOperations('001011')).toEqual([11, 8, 5, 4, 3, 4]);
  });
});
