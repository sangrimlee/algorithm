import { largestNumber } from './0179';

describe('LeetCode 0179', () => {
  test('Example 1', () => {
    expect(largestNumber([10, 2])).toBe('210');
  });
  test('Example 2', () => {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330');
  });
  test('Example 3', () => {
    expect(largestNumber([0, 0, 0, 0])).toBe('0');
  });
});
