import { removeOuterParentheses } from './leetcode-1021';

describe('2023-11-12: LeetCode 1021', () => {
  test('Example 1', () => {
    expect(removeOuterParentheses('(()())(())')).toBe('()()()');
  });
  test('Example 2', () => {
    expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
  });
  test('Example 3', () => {
    expect(removeOuterParentheses('()()')).toBe('');
  });
});
