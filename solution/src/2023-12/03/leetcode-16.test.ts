import { threeSumClosest } from './leetcode-16';

describe('2023-12-02: LeetCode 16', () => {
  test('Example 1', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
  });
  test('Example 2', () => {
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
  });
});
