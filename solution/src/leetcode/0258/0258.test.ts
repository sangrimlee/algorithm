import { addDigits } from './0258';

describe('LeetCode 0258', () => {
  test('Example 1', () => {
    expect(addDigits(38)).toBe(2);
  });
  test('Example 2', () => {
    expect(addDigits(0)).toBe(0);
  });
});
