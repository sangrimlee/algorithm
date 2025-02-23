import { mostWordsFound } from './2114';

describe('LeetCode 2114', () => {
  test('Example 1', () => {
    expect(
      mostWordsFound([
        'alice and bob love leetcode',
        'i think so too',
        'this is great thanks very much',
      ]),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(mostWordsFound(['please wait', 'continue to fight', 'continue to win'])).toBe(3);
  });
});
