import { partitionArray } from './leetcode-2294';

describe('2024-08-20: LeetCode 2294', () => {
  test('Example 1', () => {
    expect(partitionArray([3, 6, 1, 2, 5], 2)).toBe(2);
  });
  test('Example 2', () => {
    expect(partitionArray([1, 2, 3], 1)).toBe(2);
  });
  test('Example 3', () => {
    expect(partitionArray([2, 2, 4, 5], 0)).toBe(3);
  });
});
