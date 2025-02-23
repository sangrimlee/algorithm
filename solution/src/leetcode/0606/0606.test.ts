import { createTree } from '@algorithm/lib';
import { tree2str } from './0606';

describe('LeetCode 0606', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 4]);

    expect(tree2str(root)).toBe('1(2(4))(3)');
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 3, null, 4]);

    expect(tree2str(root)).toBe('1(2()(4))(3)');
  });
});
