import { minimumTotal } from './leetcode-120';

describe('2022-06-13: LeetCode 120', () => {
  test('Example 1', () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
  });

  test('Example 2', () => {
    expect(minimumTotal([[-10]])).toBe(-10);
  });
});
