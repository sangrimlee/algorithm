import { createTree } from '@algorithm/lib';
import { isCousins } from './0993';

describe('LeetCode 0993', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 4]);
    expect(isCousins(root, 4, 3)).toBe(false);
  });
  test('Example 2', () => {
    const root = createTree([1, 2, 3, null, 4, null, 5]);
    expect(isCousins(root, 5, 4)).toBe(true);
  });
  test('Example 3', () => {
    const root = createTree([1, 2, 3, null, 4]);
    expect(isCousins(root, 2, 3)).toBe(false);
  });
});
