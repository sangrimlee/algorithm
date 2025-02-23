import { countGoodStrings } from './2466';

describe('LeetCode 2466', () => {
  test('Example 1', () => {
    expect(countGoodStrings(3, 3, 1, 1)).toBe(8);
  });
  test('Example 2', () => {
    expect(countGoodStrings(2, 3, 1, 2)).toBe(5);
  });
});
