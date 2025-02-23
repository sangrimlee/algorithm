import { countSubstrings } from './1638';

describe('LeetCode 1638', () => {
  test('Example 1', () => {
    expect(countSubstrings('aba', 'baba')).toBe(6);
  });
  test('Example 2', () => {
    expect(countSubstrings('ab', 'bb')).toBe(3);
  });
});
