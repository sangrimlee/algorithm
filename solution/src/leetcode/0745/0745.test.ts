import { WordFilter } from './0745';

describe('LeetCode 0745', () => {
  test('Example 1', () => {
    const wordFilter = new WordFilter(['apple']);
    expect(wordFilter.f('a', 'e')).toBe(0);
  });

  test('Example 2', () => {
    const wordFilter = new WordFilter(['apple', 'apppple']);
    expect(wordFilter.f('a', 'e')).toBe(1);
  });
});
