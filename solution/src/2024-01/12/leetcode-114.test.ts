import { compareTree, createTree } from '@algorithm/lib';
import { flatten } from './leetcode-114';

describe('2024-01-12: LeetCode 114', () => {
  test('Example 1', () => {
    const head = createTree([1, 2, 3]);
    const answer = createTree([1, null, 2, null, null, null, 3]);
    flatten(head);
    expect(compareTree(head, answer)).toBeTruthy();
  });
  test('Example 2', () => {
    const head = createTree([]);
    const answer = createTree([]);
    flatten(head);
    expect(compareTree(head, answer)).toBeTruthy();
  });
  test('Example 3', () => {
    const head = createTree([0]);
    const answer = createTree([0]);
    flatten(head);
    expect(compareTree(head, answer)).toBeTruthy();
  });
});
