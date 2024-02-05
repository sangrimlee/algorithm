import { hIndex } from './leetcode-275';

describe('2024-02-05: LeetCode 275', () => {
  test('Example 1', () => {
    expect(hIndex([0, 1, 3, 5, 6])).toBe(3);
  });
  test('Example 2', () => {
    expect(hIndex([1, 2, 100])).toBe(2);
  });
});
