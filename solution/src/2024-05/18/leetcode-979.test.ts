import { createTree } from '@algorithm/lib';
import { distributeCoins } from './leetcode-979';

describe('2024-05-18: LeetCode 979', () => {
  test('Example 1', () => {
    expect(distributeCoins(createTree([3, 0, 0]))).toBe(2);
  });
  test('Example 2', () => {
    expect(distributeCoins(createTree([0, 3, 0]))).toBe(3);
  });
});
