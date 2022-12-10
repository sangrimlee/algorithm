import { sortSentence } from './leetcode-1859';

describe('2022-09-29 LeetCode 1859', () => {
  test('Example 1', () => {
    const s = 'is2 sentence4 This1 a3';
    expect(sortSentence(s)).toBe('This is a sentence');
  });

  test('Example 2', () => {
    const s = 'Myself2 Me1 I4 and3';
    expect(sortSentence(s)).toBe('Me Myself and I');
  });
});
