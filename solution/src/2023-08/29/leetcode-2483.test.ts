import { bestClosingTime } from './leetcode-2483';

describe('2023-08-29: LeetCode 2483', () => {
  test('Example 1', () => {
    expect(bestClosingTime('YYNY')).toBe(2);
  });
  test('Example 2', () => {
    expect(bestClosingTime('NNNNN')).toBe(0);
  });
  test('Example 3', () => {
    expect(bestClosingTime('YYYY')).toBe(4);
  });
});
