import { countGoodIntegers } from './3272';

describe('LeetCode 3272', () => {
  test('Example 1', () => {
    expect(countGoodIntegers(3, 5)).toBe(27);
  });
  test('Example 2', () => {
    expect(countGoodIntegers(1, 4)).toBe(2);
  });
  test('Example 3', () => {
    expect(countGoodIntegers(5, 6)).toBe(2468);
  });
});
