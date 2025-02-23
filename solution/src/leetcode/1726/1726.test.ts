import { tupleSameProduct } from './1726';

describe('LeetCode 1726', () => {
  test('Example 1', () => {
    expect(tupleSameProduct([2, 3, 4, 6])).toBe(8);
  });
  test('Example 2', () => {
    expect(tupleSameProduct([1, 2, 4, 5, 10])).toBe(16);
  });
});
