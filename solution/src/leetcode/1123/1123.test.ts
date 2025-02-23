import { compareTree, createTree } from '@algorithm/lib';
import { lcaDeepestLeaves } from './1123';

describe('LeetCode 1123', () => {
  test('Example 1', () => {
    expect(
      compareTree(
        lcaDeepestLeaves(createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])),
        createTree([2, 7, 4]),
      ),
    ).toBeTruthy();
  });
  test('Example 2', () => {
    expect(compareTree(lcaDeepestLeaves(createTree([1])), createTree([1]))).toBeTruthy();
  });
  test('Example 3', () => {
    expect(
      compareTree(lcaDeepestLeaves(createTree([0, 1, 3, null, 2])), createTree([2])),
    ).toBeTruthy();
  });
});
