import { hIndex } from './leetcode-274';

describe('2023-08-22: LeetCode 274', () => {
  test('Example 1', () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  });
  test('Example 2', () => {
    expect(hIndex([1, 3, 1])).toBe(1);
  });
});
