import { arraySign } from './1822';

describe('LeetCode 1822', () => {
  test('Example 1', () => {
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toBe(1);
  });
  test('Example 2', () => {
    expect(arraySign([1, 5, 0, 2, -3])).toBe(0);
  });
  test('Example 3', () => {
    expect(arraySign([-1, 1, -1, 1, -1])).toBe(-1);
  });
});
