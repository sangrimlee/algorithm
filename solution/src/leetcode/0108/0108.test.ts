import { compareTree, createTree } from '@algorithm/lib';
import { sortedArrayToBST } from './0108';

describe('LeetCode 0108', () => {
  test('Example 1', () => {
    const answer = sortedArrayToBST([-10, -3, 0, 5, 9]);
    const expected = createTree([0, -3, 9, -10, null, 5]);
    expect(compareTree(answer, expected)).toBeTruthy();
  });
  test('Example 2', () => {
    const answer = sortedArrayToBST([1, 3]);
    const expected = createTree([3, 1]);
    expect(compareTree(answer, expected)).toBeTruthy();
  });
});
