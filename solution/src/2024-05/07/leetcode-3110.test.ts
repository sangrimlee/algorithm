import { scoreOfString } from './leetcode-3110';

describe('2024-05-07: LeetCode 3110', () => {
  test('Example 1', () => {
    expect(scoreOfString('hello')).toBe(13);
  });
  test('Example 2', () => {
    expect(scoreOfString('zaz')).toBe(50);
  });
});
