import { createLinkedList, createTree } from '@algorithm/lib';
import { isSubPath } from './leetcode-1367';

describe('2024-09-07: LeetCode 1367', () => {
  const root = createTree([
    1,
    4,
    4,
    null,
    2,
    2,
    null,
    null,
    null,
    1,
    null,
    6,
    8,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    1,
    3,
  ]);

  test('Example 1', () => {
    expect(isSubPath(createLinkedList([4, 2, 8]), root)).toBe(true);
  });
  test('Example 2', () => {
    expect(isSubPath(createLinkedList([1, 4, 2, 6]), root)).toBe(true);
  });
  test('Example 3', () => {
    expect(isSubPath(createLinkedList([1, 4, 2, 6, 8]), root)).toBe(false);
  });
});
