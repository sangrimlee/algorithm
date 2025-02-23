import { minExtraChar } from './2707';

describe('LeetCode 2707', () => {
  test('Example 1', () => {
    expect(minExtraChar('leetscode', ['leet', 'code', 'leetcode'])).toBe(1);
  });
  test('Example 2', () => {
    expect(minExtraChar('sayhelloworld', ['hello', 'world'])).toBe(3);
  });
});
