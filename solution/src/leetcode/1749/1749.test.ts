import { maxAbsoluteSum } from './1749';

describe('LeetCode 1749', () => {
  test('Example 1', () => {
    expect(maxAbsoluteSum([1, -3, 2, 3, -4])).toBe(5);
  });
  test('Example 2', () => {
    expect(maxAbsoluteSum([2, -5, 1, -4, 3, -2])).toBe(8);
  });
});
