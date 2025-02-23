import { maxKelements } from './2530';

describe('LeetCode 2530', () => {
  test('Example 1', () => {
    expect(maxKelements([10, 10, 10, 10, 10], 5)).toBe(50);
  });
  test('Example 2', () => {
    expect(maxKelements([1, 10, 3, 3, 3], 3)).toBe(17);
  });
});
