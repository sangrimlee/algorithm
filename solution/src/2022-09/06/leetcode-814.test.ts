import { compareTree, createTree } from '@algorithm/lib';
import { pruneTree } from './leetcode-814';

describe('2022-09-06: LeetCode 814', () => {
  test('Example 1', () => {
    const root = createTree([1, null, 0, 0, 1]);
    const answer = createTree([1, null, 0, null, 1]);

    expect(compareTree(pruneTree(root), answer)).toBeTruthy();
  });

  test('Example 2', () => {
    const root = createTree([1, 0, 1, 0, 0, 0, 1]);
    const answer = createTree([1, null, 1, null, 1]);

    expect(compareTree(pruneTree(root), answer)).toBeTruthy();
  });

  test('Example 3', () => {
    const root = createTree([1, 1, 0, 1, 1, 0, 1, 0]);
    const answer = createTree([1, 1, 0, 1, 1, null, 1]);

    expect(compareTree(pruneTree(root), answer)).toBeTruthy();
  });
});
