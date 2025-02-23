import { compareTree, createTree } from '@algorithm/lib';
import { delNodes } from './1110';

describe('LeetCode 1110', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 4, 5, 6, 7]);
    const toDelete = [3, 5];
    const answer = [[1, 2, null, 4], [6], [7]].map(createTree);
    expect(delNodes(root, toDelete).every((node, i) => compareTree(node, answer[i]))).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([1, 2, 4, null, 3]);
    const toDelete = [3];
    const answer = [[1, 2, 4]].map(createTree);
    expect(delNodes(root, toDelete).every((node, i) => compareTree(node, answer[i]))).toBe(true);
  });
});
