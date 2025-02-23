import { findAllConcatenatedWordsInADict } from './0472';

describe('LeetCode 0472', () => {
  test('Example 1', () => {
    const words = [
      'cat',
      'cats',
      'catsdogcats',
      'dog',
      'dogcatsdog',
      'hippopotamuses',
      'rat',
      'ratcatdogcat',
    ];
    expect(findAllConcatenatedWordsInADict(words)).toEqual([
      'catsdogcats',
      'dogcatsdog',
      'ratcatdogcat',
    ]);
  });

  test('Example 2', () => {
    const words = ['cat', 'dog', 'catdog'];
    expect(findAllConcatenatedWordsInADict(words)).toEqual(['catdog']);
  });
});
