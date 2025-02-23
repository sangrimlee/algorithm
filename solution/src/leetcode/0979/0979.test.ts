import { createTree } from '@algorithm/lib';
import { distributeCoins } from './0979';

describe('LeetCode 0979', () => {
  test('Example 1', () => {
    expect(distributeCoins(createTree([3, 0, 0]))).toBe(2);
  });
  test('Example 2', () => {
    expect(distributeCoins(createTree([0, 3, 0]))).toBe(3);
  });
});
