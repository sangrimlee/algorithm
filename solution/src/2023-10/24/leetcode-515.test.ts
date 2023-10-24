import { createTree } from '@algorithm/lib';
import { largestValues } from './leetcode-515';

describe('2023-10-24: LeetCode 515', () => {
  test('Example 1', () => {
    const root = createTree([1, 3, 2, 5, 3, null, 9]);
    expect(largestValues(root)).toEqual([1, 3, 9]);
  });
  test('Example 2', () => {
    const root = createTree([1, 2, 3]);
    expect(largestValues(root)).toEqual([1, 3]);
  });
});
