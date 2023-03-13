import { makingHamburger } from './programmers-133502';

describe('2023-03-13: Programmers 133502', () => {
  test('Example 1', () => {
    expect(makingHamburger([2, 1, 1, 2, 3, 1, 2, 3, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(makingHamburger([1, 3, 2, 1, 2, 1, 3, 1, 2])).toBe(0);
  });
});
