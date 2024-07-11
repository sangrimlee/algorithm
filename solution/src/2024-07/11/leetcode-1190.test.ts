import { reverseParentheses } from './leetcode-1190';

describe('2024-07-11: LeetCode 1190', () => {
  test('Example 1', () => {
    expect(reverseParentheses('(abcd)')).toBe('dcba');
  });
  test('Example 2', () => {
    expect(reverseParentheses('(u(love)i)')).toBe('iloveu');
  });
  test('Example 3', () => {
    expect(reverseParentheses('(ed(et(oc))el)')).toBe('leetcode');
  });
});
