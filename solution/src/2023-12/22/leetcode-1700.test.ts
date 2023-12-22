import { countStudents } from './leetcode-1700';

describe('2023-12-22: LeetCode 1700', () => {
  test('Example 1', () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0);
  });
  test('Example 2', () => {
    expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3);
  });
});
