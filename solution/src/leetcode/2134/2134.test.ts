import { minSwaps } from './2134';

describe('LeetCode 2134', () => {
  test('Example 1', () => {
    expect(minSwaps([0, 1, 0, 1, 1, 0, 0])).toBe(1);
  });
  test('Example 2', () => {
    expect(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(2);
  });
  test('Example 3', () => {
    expect(minSwaps([1, 1, 0, 0, 1])).toBe(0);
  });
});
