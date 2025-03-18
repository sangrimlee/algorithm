import { longestNiceSubarray } from './2401';

describe('LeetCode 2401', () => {
  test('Example 1', () => {
    expect(longestNiceSubarray([1, 3, 8, 48, 10])).toBe(3);
  });
  test('Example 2', () => {
    expect(longestNiceSubarray([3, 1, 5, 11, 13])).toBe(1);
  });
});
