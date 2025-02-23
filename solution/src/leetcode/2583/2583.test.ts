import { createTree } from '@algorithm/lib';
import { kthLargestLevelSum } from './2583';

describe('LeetCode 2583', () => {
  test('Example 1', () => {
    expect(kthLargestLevelSum(createTree([5, 8, 9, 2, 1, 3, 7, 4, 6]), 2)).toBe(13);
  });
  test('Example 2', () => {
    expect(kthLargestLevelSum(createTree([1, 2, null, 3]), 1)).toBe(3);
  });
});
