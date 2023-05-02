import { createTree } from '@algorithm/lib';
import { averageOfLevels } from './leetcode-637';

describe('2022-09-02: LeetCode 637', () => {
  test('Example 1', () => {
    const arr = [3, 9, 20, null, null, 15, 7];
    const tree = createTree(arr);
    expect(averageOfLevels(tree)).toEqual([3.0, 14.5, 11.0]);
  });

  test('Example 2', () => {
    const arr = [3, 9, 20, 15, 7];
    const tree = createTree(arr);
    expect(averageOfLevels(tree)).toEqual([3.0, 14.5, 11.0]);
  });
});
