import { poorPigs } from './leetcode-458';

describe('2023-10-29: LeetCode 458', () => {
  test('Example 1', () => {
    expect(poorPigs(4, 15, 15)).toBe(2);
  });
  test('Example 2', () => {
    expect(poorPigs(4, 15, 30)).toBe(2);
  });
  test('Example 3', () => {
    expect(poorPigs(125, 1, 4)).toBe(3);
  });
});
