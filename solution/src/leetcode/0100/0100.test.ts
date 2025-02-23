import { createTree } from '@algorithm/lib';
import { isSameTree } from './0100';

describe('LeetCode 0100', () => {
  test('Example 1', () => {
    const p = [1, 2, 3],
      q = [1, 2, 3];
    expect(isSameTree(createTree(p), createTree(q))).toBeTruthy();
  });

  test('Example 2', () => {
    const p = [1, 2],
      q = [1, null, 2];
    expect(isSameTree(createTree(p), createTree(q))).toBeFalsy();
  });

  test('Example 3', () => {
    const p = [1, 2, 1],
      q = [1, 1, 2];
    expect(isSameTree(createTree(p), createTree(q))).toBeFalsy();
  });
});
