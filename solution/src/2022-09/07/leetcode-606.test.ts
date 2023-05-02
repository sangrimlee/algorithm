import { createTree } from '@algorithm/lib';
import { tree2str } from './leetcode-606';

describe('2022-09-07: LeetCode 606', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 4]);

    expect(tree2str(root)).toBe('1(2(4))(3)');
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 3, null, 4]);

    expect(tree2str(root)).toBe('1(2()(4))(3)');
  });
});
