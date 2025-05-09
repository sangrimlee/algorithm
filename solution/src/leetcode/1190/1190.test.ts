import { reverseParentheses } from './1190';

describe('LeetCode 1190', () => {
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
