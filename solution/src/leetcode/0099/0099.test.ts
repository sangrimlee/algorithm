import { compareTree, createTree } from '@algorithm/lib';
import { recoverTree } from './0099';

describe('LeetCode 0099', () => {
  test('Example 1', () => {
    const head = createTree([1, 3, null, null, 2]);
    const answer = createTree([3, 1, null, null, 2]);
    recoverTree(head);
    expect(compareTree(head, answer)).toBe(true);
  });
  test('Example 2', () => {
    const head = createTree([3, 1, 4, null, null, 2]);
    const answer = createTree([2, 1, 4, null, null, 3]);
    recoverTree(head);
    expect(compareTree(head, answer)).toBe(true);
  });
});
