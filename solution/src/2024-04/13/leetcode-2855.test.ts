import { minimumRightShifts } from './leetcode-2855';

describe('2024-04-13: LeetCode 2855', () => {
  test('Example 1', () => {
    expect(minimumRightShifts([3, 4, 5, 1, 2])).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumRightShifts([1, 3, 5])).toBe(0);
  });
  test('Example 3', () => {
    expect(minimumRightShifts([2, 1, 4])).toBe(-1);
  });
});
