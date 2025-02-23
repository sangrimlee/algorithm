import { minimumSumSubarray } from './3364';

describe('LeetCode 3364', () => {
  test('Example 1', () => {
    expect(minimumSumSubarray([3, -2, 1, 4], 2, 3)).toBe(1);
  });
  test('Example 2', () => {
    expect(minimumSumSubarray([-2, 2, -3, 1], 2, 3)).toBe(-1);
  });
  test('Example 3', () => {
    expect(minimumSumSubarray([1, 2, 3, 4], 2, 4)).toBe(3);
  });
});
