import { WordFilter } from './leetcode-745';

describe('2022-06-18: LeetCode 745', () => {
  test('Example 1', () => {
    const wordFilter = new WordFilter(['apple']);
    expect(wordFilter.f('a', 'e')).toBe(0);
  });

  test('Example 2', () => {
    const wordFilter = new WordFilter(['apple', 'apppple']);
    expect(wordFilter.f('a', 'e')).toBe(1);
  });
});
