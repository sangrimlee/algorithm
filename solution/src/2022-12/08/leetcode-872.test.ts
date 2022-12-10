import { createTree } from '@1d1s/lib';
import { leafSimilar } from './leetcode-872';

describe('2022-12-08: Leetcode 872', () => {
  test('Example 1', () => {
    const root1 = createTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
    const root2 = createTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]);
    expect(leafSimilar(root1, root2)).toBeTruthy();
  });

  test('Example 2', () => {
    const root1 = createTree([1, 2, 3]);
    const root2 = createTree([1, 3, 2]);
    expect(leafSimilar(root1, root2)).toBeFalsy();
  });
});
