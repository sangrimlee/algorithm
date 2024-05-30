import { duplicateNumbersXOR } from './leetcode-3158';

describe('2024-05-30: LeetCode 3158', () => {
  test('Example 1', () => {
    expect(duplicateNumbersXOR([1, 2, 1, 3])).toBe(1);
  });
  test('Example 2', () => {
    expect(duplicateNumbersXOR([1, 2, 3])).toBe(0);
  });
  test('Example 3', () => {
    expect(duplicateNumbersXOR([1, 2, 2, 1])).toBe(3);
  });
});
