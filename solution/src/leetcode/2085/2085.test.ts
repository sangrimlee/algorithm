import { countWords } from './2085';

describe('LeetCode 2085', () => {
  test('Example 1', () => {
    expect(
      countWords(['leetcode', 'is', 'amazing', 'as', 'is'], ['amazing', 'leetcode', 'is']),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(countWords(['b', 'bb', 'bbb'], ['a', 'aa', 'aaa'])).toBe(0);
  });
  test('Example 3', () => {
    expect(countWords(['a', 'ab'], ['a', 'a', 'a', 'ab'])).toBe(1);
  });
});
