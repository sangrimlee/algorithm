import { parseBoolExpr } from './leetcode-1106';

describe('2024-10-20: LeetCode 1106', () => {
  test('Example 1', () => {
    expect(parseBoolExpr('&(|(f))')).toBe(false);
  });
  test('Example 2', () => {
    expect(parseBoolExpr('|(f,f,f,t)')).toBe(true);
  });
  test('Example 3', () => {
    expect(parseBoolExpr('!(&(f,t))')).toBe(true);
  });
});