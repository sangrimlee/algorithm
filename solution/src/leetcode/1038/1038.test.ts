import { compareTree, createTree } from '@algorithm/lib';
import { bstToGst } from './1038';

describe('LeetCode 1038', () => {
  test('Example 1', () => {
    const root = createTree([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]);
    const answer = createTree([
      30,
      36,
      21,
      36,
      35,
      26,
      15,
      null,
      null,
      null,
      33,
      null,
      null,
      null,
      8,
    ]);
    expect(compareTree(bstToGst(root), answer)).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([0, null, 1]);
    const answer = createTree([1, null, 1]);
    expect(compareTree(bstToGst(root), answer)).toBe(true);
  });
});
