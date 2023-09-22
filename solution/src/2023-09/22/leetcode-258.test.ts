import { addDigits } from './leetcode-258';

describe('2023-09-22: LeetCode 258', () => {
  test('Example 1', () => {
    expect(addDigits(38)).toBe(2);
  });
  test('Example 2', () => {
    expect(addDigits(0)).toBe(0);
  });
});
