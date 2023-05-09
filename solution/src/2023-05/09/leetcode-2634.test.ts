import { filter } from './leetcode-2634';

describe('2023-05-09: LeetCode 2634', () => {
  test('Example 1', () => {
    const arr = [0, 10, 20, 30];
    const greaterThan10 = (n: number) => n > 10;

    expect(filter(arr, greaterThan10)).toEqual([20, 30]);
  });

  test('Example 2', () => {
    const arr = [1, 2, 3];
    const firstIndex = (n: number, i: number) => i === 0;

    expect(filter(arr, firstIndex)).toEqual([1]);
  });
});
