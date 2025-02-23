import { makingHamburger } from './133502';

describe('LeetCode 133502', () => {
  test('Example 1', () => {
    expect(makingHamburger([2, 1, 1, 2, 3, 1, 2, 3, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(makingHamburger([1, 3, 2, 1, 2, 1, 3, 1, 2])).toBe(0);
  });
});
