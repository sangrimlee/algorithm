import { numOfSubarrays } from './1524';

describe('LeetCode 1524', () => {
  test('Example 1', () => {
    expect(numOfSubarrays([1, 3, 5])).toBe(4);
  });
  test('Example 2', () => {
    expect(numOfSubarrays([2, 4, 6])).toBe(0);
  });
  test('Example 3', () => {
    expect(numOfSubarrays([1, 2, 3, 4, 5, 6, 7])).toBe(16);
  });
});
