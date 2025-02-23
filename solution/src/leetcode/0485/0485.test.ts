import { findMaxConsecutiveOnes } from './0485';

describe('LeetCode 0485', () => {
  test('Example 1', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
  });
});
