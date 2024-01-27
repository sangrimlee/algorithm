import { WordDictionary } from './leetcode-211';

describe('2024-01-27: LeetCode 211', () => {
  test('Example 1', () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord('bad');
    wordDictionary.addWord('dad');
    wordDictionary.addWord('mad');
    expect(wordDictionary.search('pad')).toBe(false);
    expect(wordDictionary.search('bad')).toBe(true);
    expect(wordDictionary.search('.ad')).toBe(true);
    expect(wordDictionary.search('b..')).toBe(true);
  });
  test('Example 2', () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord('a');
    wordDictionary.addWord('a');
    expect(wordDictionary.search('.')).toBe(true);
    expect(wordDictionary.search('a')).toBe(true);
    expect(wordDictionary.search('aa')).toBe(false);
    expect(wordDictionary.search('a')).toBe(true);
    expect(wordDictionary.search('.a')).toBe(false);
    expect(wordDictionary.search('a.')).toBe(false);
  });
});
