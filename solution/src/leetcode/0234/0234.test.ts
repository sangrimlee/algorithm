import { createLinkedList } from '@algorithm/lib';
import { isPalindrome } from './0234';

describe('LeetCode 0234', () => {
  test('Example 1', () => {
    const head = createLinkedList([1, 2, 2, 1]);

    expect(isPalindrome(head)).toBeTruthy();
  });

  test('Example 2', () => {
    const head = createLinkedList([1, 2]);

    expect(isPalindrome(head)).toBeFalsy();
  });
});
