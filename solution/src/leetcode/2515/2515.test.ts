import { closetTarget } from './2515';

describe('LeetCode 2515', () => {
  test('Example 1', () => {
    expect(closetTarget(['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1)).toBe(1);
  });
  test('Example 2', () => {
    expect(closetTarget(['a', 'b', 'leetcode'], 'leetcode', 0)).toBe(1);
  });
  test('Example 3', () => {
    expect(closetTarget(['i', 'eat', 'leetcode'], 'ate', 0)).toBe(-1);
  });
});
