/* eslint-disable */
import { ArrayWrapper } from './2695';

describe('LeetCode 2695', () => {
  test('Example 1', () => {
    const obj1 = new ArrayWrapper([1, 2]);
    const obj2 = new ArrayWrapper([3, 4]);
    // @ts-ignore
    expect(obj1 + obj2).toBe(10);
  });
  test('Example 2', () => {
    const obj = new ArrayWrapper([23, 98, 42, 70]);
    expect(String(obj)).toBe('[23,98,42,70]');
  });
  test('Example 3', () => {
    const obj1 = new ArrayWrapper([]);
    const obj2 = new ArrayWrapper([]);
    // @ts-ignore
    expect(obj1 + obj2).toBe(0);
  });
});
