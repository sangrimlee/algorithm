import { largestOddNumber } from './1903';

describe('LeetCode 1903', () => {
  test('Example 1', () => {
    expect(largestOddNumber('52')).toBe('5');
  });
  test('Example 2', () => {
    expect(largestOddNumber('4206')).toBe('');
  });
  test('Example 3', () => {
    expect(largestOddNumber('35427')).toBe('35427');
  });
});
