import { isPowerOfThree } from './0326';

describe('LeetCode 0326', () => {
  test('Example 1', () => {
    expect(isPowerOfThree(27)).toBe(true);
  });
  test('Example 2', () => {
    expect(isPowerOfThree(0)).toBe(false);
  });
  test('Example 3', () => {
    expect(isPowerOfThree(-1)).toBe(false);
  });
  test('Example 4', () => {
    expect(isPowerOfThree(59049)).toBe(true);
  });
  test('Example 5', () => {
    expect(isPowerOfThree(-59049)).toBe(false);
  });
});
