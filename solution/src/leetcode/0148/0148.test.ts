import { createLinkedList, linkedListToArr } from '@algorithm/lib';
import { sortList } from './0148';

describe('LeetCode 0148', () => {
  const sortFunc = (a: number, b: number) => a - b;
  test('Example 1', () => {
    const arr = [4, 2, 1, 3];
    const root = createLinkedList(arr);
    expect(linkedListToArr(sortList(root))).toEqual(arr.sort(sortFunc));
  });

  test('Example 2', () => {
    const arr = [-1, 5, 3, 4, 0];
    const root = createLinkedList(arr);
    expect(linkedListToArr(sortList(root))).toEqual(arr.sort(sortFunc));
  });

  test('Example 3', () => {
    const arr: number[] = [];
    const root = createLinkedList(arr);
    expect(linkedListToArr(sortList(root))).toEqual(arr.sort(sortFunc));
  });
});
