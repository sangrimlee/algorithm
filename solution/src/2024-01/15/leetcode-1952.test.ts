import { isThree } from './leetcode-1952';

describe('2024-01-15: LeetCode 1952', () => {
  test('Example 1', () => {
    expect(isThree(2)).toBe(false);
  });
  test('Example 2', () => {
    expect(isThree(4)).toBe(true);
  });
});
