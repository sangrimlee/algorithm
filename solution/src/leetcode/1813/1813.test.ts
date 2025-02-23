import { areSentencesSimilar } from './1813';

describe('LeetCode 1813', () => {
  test('Example 1', () => {
    expect(areSentencesSimilar('My name is Haley', 'My Haley')).toBe(true);
  });
  test('Example 2', () => {
    expect(areSentencesSimilar('of', 'A lot of words')).toBe(false);
  });
  test('Example 3', () => {
    expect(areSentencesSimilar('Eating right now', 'Eating')).toBe(true);
  });
});
