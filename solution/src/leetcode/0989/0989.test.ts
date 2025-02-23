import { addToArrayForm } from './0989';

describe('LeetCode 0989', () => {
  test('Example 1', () => {
    expect(addToArrayForm([1, 2, 0, 0], 34)).toEqual([1, 2, 3, 4]);
  });
  test('Example 2', () => {
    expect(addToArrayForm([2, 7, 4], 181)).toEqual([4, 5, 5]);
  });
  test('Example 3', () => {
    expect(addToArrayForm([2, 1, 5], 806)).toEqual([1, 0, 2, 1]);
  });
  test('Example 4', () => {
    expect(
      addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516),
    ).toEqual([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9]);
  });
});
