import { map } from './2635';

describe('LeetCode 2635', () => {
  test('Example 1', () => {
    const arr = [1, 2, 3];
    const plusone = (n: number) => n + 1;
    expect(map(arr, plusone)).toEqual([2, 3, 4]);
  });

  test('Example 2', () => {
    const arr = [1, 2, 3];
    const plusI = (n: number, i: number) => n + i;
    expect(map(arr, plusI)).toEqual([1, 3, 5]);
  });

  test('Example 3', () => {
    const arr = [10, 20, 30];
    const constant = () => 42;
    expect(map(arr, constant)).toEqual([42, 42, 42]);
  });
});
