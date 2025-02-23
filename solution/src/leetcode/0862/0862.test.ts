import { shortestSubarray } from './0862';

describe('LeetCode 0862', () => {
  test('Example 1', () => {
    expect(shortestSubarray([1], 1)).toBe(1);
  });
  test('Example 2', () => {
    expect(shortestSubarray([1, 2], 4)).toBe(-1);
  });
  test('Example 3', () => {
    expect(shortestSubarray([2, -1, 2], 3)).toBe(3);
  });
});
