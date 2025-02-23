import { removeOuterParentheses } from './1021';

describe('LeetCode 1021', () => {
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
