import { createLinkedList } from '@algorithm/lib';
import { pairSum } from './leetcode-2130';

describe('2023-05-17: LeetCode 2130', () => {
  test('Example 1', () => {
    const head = createLinkedList([5, 4, 2, 1]);
    expect(pairSum(head)).toEqual(6);
  });
  test('Example 2', () => {
    const head = createLinkedList([4, 2, 2, 3]);
    expect(pairSum(head)).toEqual(7);
  });
  test('Example 3', () => {
    const head = createLinkedList([1, 100000]);
    expect(pairSum(head)).toEqual(100001);
  });
});
