import { rob } from './0198';

describe('LeetCode 0198', () => {
  test('Example 1', () => {
    const nums = [1, 2, 3, 1];
    expect(rob(nums)).toBe(4);
  });

  test('Example 2', () => {
    const nums = [2, 7, 9, 3, 1];
    expect(rob(nums)).toBe(12);
  });

  test('Example 3', () => {
    const nums = [1, 2];
    expect(rob(nums)).toBe(2);
  });

  test('Example 4', () => {
    const nums = [2, 1, 1, 2];
    expect(rob(nums)).toBe(4);
  });
});
