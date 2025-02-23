import { kthGrammar } from './0779';

describe('LeetCode 0779', () => {
  test('Example 1', () => {
    expect(kthGrammar(1, 1)).toBe(0);
  });
  test('Example 2', () => {
    expect(kthGrammar(2, 1)).toBe(0);
  });
  test('Example 3', () => {
    expect(kthGrammar(2, 2)).toBe(1);
  });
});
