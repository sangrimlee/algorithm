import { canBeTypedWords } from './1935';

describe('LeetCode 1935', () => {
  test('Example 1', () => {
    expect(canBeTypedWords('hello world', 'ad')).toBe(1);
  });
  test('Example 2', () => {
    expect(canBeTypedWords('leet code', 'lt')).toBe(1);
  });
  test('Example 3', () => {
    expect(canBeTypedWords('leet code', 'e')).toBe(0);
  });
});
