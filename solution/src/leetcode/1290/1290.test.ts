import { createLinkedList } from '@algorithm/lib';
import { getDecimalValue } from './1290';

describe('LeetCode 1290', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 0, 1]);
    expect(getDecimalValue(head)).toBe(5);
  });
  test('Example 2', () => {
    const head = createLinkedList([0]);
    expect(getDecimalValue(head)).toBe(0);
  });
});
