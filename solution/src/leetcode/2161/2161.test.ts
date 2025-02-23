import { pivotArray } from './2161';

describe('LeetCode 2161', () => {
  test('Example 1', () => {
    expect(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)).toEqual([9, 5, 3, 10, 10, 12, 14]);
  });
  test('Example 2', () => {
    expect(pivotArray([-3, 4, 3, 2], 2)).toEqual([-3, 2, 4, 3]);
  });
});
