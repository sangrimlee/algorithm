import { fillCups } from './leetcode-2335';

describe('2024-02-26: LeetCode 2335', () => {
  test('Example 1', () => {
    expect(fillCups([1, 4, 2])).toBe(4);
  });
  test('Example 2', () => {
    expect(fillCups([5, 4, 4])).toBe(7);
  });
  test('Example 3', () => {
    expect(fillCups([5, 0, 0])).toBe(5);
  });
});
