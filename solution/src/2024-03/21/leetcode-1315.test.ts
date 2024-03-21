import { createTree } from '@algorithm/lib';
import { sumEvenGrandparent } from './leetcode-1315';

describe('2024-03-21: LeetCode 1315', () => {
  test('Example 1', () => {
    const root = createTree([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]);
    expect(sumEvenGrandparent(root)).toBe(18);
  });
  test('Example 2', () => {
    const root = createTree([1]);
    expect(sumEvenGrandparent(root)).toBe(0);
  });
});
