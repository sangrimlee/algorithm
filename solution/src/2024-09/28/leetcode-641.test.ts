import { MyCircularDeque } from './leetcode-641';

describe('2024-09-28: LeetCode 641', () => {
  test('Example 1', () => {
    const myCircularDeque = new MyCircularDeque(3);
    expect(myCircularDeque.insertLast(1)).toBe(true);
    expect(myCircularDeque.insertLast(2)).toBe(true);
    expect(myCircularDeque.insertFront(3)).toBe(true);
    expect(myCircularDeque.insertFront(4)).toBe(false);
    expect(myCircularDeque.getRear()).toBe(2);
    expect(myCircularDeque.isFull()).toBe(true);
    expect(myCircularDeque.deleteLast()).toBe(true);
    expect(myCircularDeque.insertFront(4)).toBe(true);
    expect(myCircularDeque.getFront()).toBe(4);
  });

  test('Example 2', () => {
    const myCircularDeque = new MyCircularDeque(8);
    expect(myCircularDeque.insertFront(5)).toBe(true);
    expect(myCircularDeque.getFront()).toBe(5);
    expect(myCircularDeque.isEmpty()).toBe(false);
    expect(myCircularDeque.deleteFront()).toBe(true);
    expect(myCircularDeque.insertLast(3)).toBe(true);
    expect(myCircularDeque.getRear()).toBe(3);
    expect(myCircularDeque.insertLast(7)).toBe(true);
    expect(myCircularDeque.insertFront(7)).toBe(true);
    expect(myCircularDeque.deleteLast()).toBe(true);
    expect(myCircularDeque.insertLast(4)).toBe(true);
    expect(myCircularDeque.isEmpty()).toBe(false);
  });
});
