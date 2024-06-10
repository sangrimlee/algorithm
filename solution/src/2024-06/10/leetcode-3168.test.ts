import { minimumChairs } from './leetcode-3168';

describe('2024-06-10: LeetCode 3168', () => {
  test('Example 1', () => {
    expect(minimumChairs('EEEEEEE')).toBe(7);
  });

  test('Example 2', () => {
    expect(minimumChairs('ELELEEL')).toBe(2);
  });

  test('Example 3', () => {
    expect(minimumChairs('ELEELEELLL')).toBe(3);
  });
});
