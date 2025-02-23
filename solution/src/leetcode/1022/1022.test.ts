import { createTree } from '@algorithm/lib';
import { sumRootToLeaf } from './1022';

describe('LeetCode 1022', () => {
  test('Example 1', () => {
    const root = createTree([1, 0, 1, 0, 1, 0, 1]);
    expect(sumRootToLeaf(root)).toBe(22);
  });
  test('Example 2', () => {
    const root = createTree([0]);
    expect(sumRootToLeaf(root)).toBe(0);
  });
});
