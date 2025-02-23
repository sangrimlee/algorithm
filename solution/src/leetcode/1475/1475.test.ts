import { finalPrices } from './1475';

describe('LeetCode 1475', () => {
  test('Example 1', () => {
    expect(finalPrices([8, 4, 6, 2, 3])).toEqual([4, 2, 4, 2, 3]);
  });
  test('Example 2', () => {
    expect(finalPrices([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  test('Example 3', () => {
    expect(finalPrices([10, 1, 1, 6])).toEqual([9, 0, 1, 6]);
  });
});
