import { primeSubOperation } from './2601';

describe('LeetCode 2601', () => {
  test('Example 1', () => {
    expect(primeSubOperation([4, 9, 6, 10])).toBe(true);
  });
  test('Example 2', () => {
    expect(primeSubOperation([6, 8, 11, 12])).toBe(true);
  });
  test('Example 3', () => {
    expect(primeSubOperation([5, 8, 3])).toBe(false);
  });
});
