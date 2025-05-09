import { createTree } from '@algorithm/lib';
import { rightSideView } from './0199';

describe('LeetCode 0199', () => {
  test('Example 1', () => {
    const rootNode = createTree([1, 2, 3, null, 5, null, 4]);
    expect(rightSideView(rootNode)).toEqual([1, 3, 4]);
  });

  test('Example 2', () => {
    const rootNode = createTree([1, null, 3]);
    expect(rightSideView(rootNode)).toEqual([1, 3]);
  });

  test('Example 3', () => {
    const rootNode = createTree([]);
    expect(rightSideView(rootNode)).toEqual([]);
  });

  test('Example 4', () => {
    const rootNode = createTree([1, 2, 3, 4]);
    expect(rightSideView(rootNode)).toEqual([1, 3, 4]);
  });
});
