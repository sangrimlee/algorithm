import { createTree } from '@algorithm/lib';
import { BSTIterator } from './0173';

describe('LeetCode 0173', () => {
  test('Example 1', () => {
    const bSTIterator = new BSTIterator(createTree([7, 3, 15, null, null, 9, 20]));
    expect(bSTIterator.next()).toBe(3);
    expect(bSTIterator.next()).toBe(7);
    expect(bSTIterator.hasNext()).toBe(true);
    expect(bSTIterator.next()).toBe(9);
    expect(bSTIterator.hasNext()).toBe(true);
    expect(bSTIterator.next()).toBe(15);
    expect(bSTIterator.hasNext()).toBe(true);
    expect(bSTIterator.next()).toBe(20);
    expect(bSTIterator.hasNext()).toBe(false);
  });
});
