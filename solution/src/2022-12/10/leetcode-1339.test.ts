import { createTree } from '@algorithm/lib';
import { maxProduct } from './leetcode-1339';

describe('2022-12-10: Leetcode 1339', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3, 4, 5, 6]);
    expect(maxProduct(root)).toBe(110);
  });

  test('Example 2', () => {
    const root = createTree([1, null, 2, 3, 4, null, null, 5, 6]);
    expect(maxProduct(root)).toBe(90);
  });
});
