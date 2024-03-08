import { distinctAverages } from './leetcode-2465';

describe('2024-03-08: LeetCode 2465', () => {
  test('Example 1', () => {
    expect(distinctAverages([4, 1, 4, 0, 3, 5])).toBe(2);
  });
  test('Example 2', () => {
    expect(distinctAverages([1, 100])).toBe(1);
  });
});
