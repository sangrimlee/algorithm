import { isCircularSentence } from './2490';

describe('LeetCode 2490', () => {
  test('Example 1', () => {
    expect(isCircularSentence('leetcode exercises sound delightful')).toBe(true);
  });
  test('Example 2', () => {
    expect(isCircularSentence('eetcode')).toBe(true);
  });
  test('Example 3', () => {
    expect(isCircularSentence('Leetcode is cool')).toBe(false);
  });
});
