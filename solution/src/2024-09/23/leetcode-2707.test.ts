import { minExtraChar } from './leetcode-2707';

describe('2024-09-23: LeetCode 2707', () => {
  test('Example 1', () => {
    expect(minExtraChar('leetscode', ['leet', 'code', 'leetcode'])).toBe(1);
  });
  test('Example 2', () => {
    expect(minExtraChar('sayhelloworld', ['hello', 'world'])).toBe(3);
  });
});
