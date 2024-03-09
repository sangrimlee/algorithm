import { getCommon } from './leetcode-2540';

describe('2024-03-09: LeetCode 2540', () => {
  test('Example 1', () => {
    expect(getCommon([1, 2, 3], [2, 4])).toBe(2);
  });
  test('Example 2', () => {
    expect(getCommon([1, 2, 3, 6], [2, 3, 4, 5])).toBe(2);
  });
});
