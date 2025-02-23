import { minDays } from './1482';

describe('LeetCode 1482', () => {
  test('Example 1', () => {
    expect(minDays([1, 10, 3, 10, 2], 3, 1)).toBe(3);
  });
  test('Example 2', () => {
    expect(minDays([1, 10, 3, 10, 2], 3, 2)).toBe(-1);
  });
  test('Example 3', () => {
    expect(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)).toBe(12);
  });
});
