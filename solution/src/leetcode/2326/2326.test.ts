import { createLinkedList } from '@algorithm/lib';
import { spiralMatrix } from './2326';

describe('LeetCode 2326', () => {
  test('Example 1', () => {
    const head = createLinkedList([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]);
    expect(spiralMatrix(3, 5, head)).toEqual([
      [3, 0, 2, 6, 8],
      [5, 0, -1, -1, 1],
      [5, 2, 4, 9, 7],
    ]);
  });
  test('Example 2', () => {
    const head = createLinkedList([0, 1, 2]);
    expect(spiralMatrix(1, 4, head)).toEqual([[0, 1, 2, -1]]);
  });
});
