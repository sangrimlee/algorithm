import { checkValidString } from './leetcode-678';

describe('2024-04-07: LeetCode 678', () => {
  test('Example 1', () => {
    expect(checkValidString('()')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkValidString('(*)')).toBe(true);
  });
  test('Example 3', () => {
    expect(checkValidString('(*))')).toBe(true);
  });
});
