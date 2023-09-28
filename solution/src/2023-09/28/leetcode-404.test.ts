import { createTree } from '@algorithm/lib';
import { sumOfLeftLeaves } from './leetcode-404';

describe('2023-09-28: LeetCode 404', () => {
  test('Example 1', () => {
    const tree = createTree([3, 9, 20, null, null, 15, 7]);
    expect(sumOfLeftLeaves(tree)).toBe(24);
  });
  test('Example 2', () => {
    const tree = createTree([1]);
    expect(sumOfLeftLeaves(tree)).toEqual(0);
  });
});
