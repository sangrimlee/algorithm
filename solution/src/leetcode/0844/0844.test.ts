import { backspaceCompare } from './0844';

describe('LeetCode 0844', () => {
  test('Example 1', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true);
  });
  test('Example 2', () => {
    expect(backspaceCompare('ab##', 'c#d#')).toBe(true);
  });
  test('Example 3', () => {
    expect(backspaceCompare('a#c', 'b')).toBe(false);
  });
  test('Example 4', () => {
    expect(backspaceCompare('bxj##tw', 'bxj###tw')).toBe(false);
  });
});
