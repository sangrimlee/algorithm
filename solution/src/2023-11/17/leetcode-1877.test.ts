import { minPairSum } from './leetcode-1877';

describe('2023-11-17: LeetCode 1877', () => {
  test('Example 1', () => {
    expect(minPairSum([3, 5, 2, 3])).toBe(7);
  });
  test('Example 2', () => {
    expect(minPairSum([3, 5, 4, 2, 4, 6])).toBe(8);
  });
});
