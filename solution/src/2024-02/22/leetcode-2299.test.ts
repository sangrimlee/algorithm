import { strongPasswordCheckerII } from './leetcode-2299';

describe('2024-02-22: LeetCode 2299', () => {
  test('Example 1', () => {
    expect(strongPasswordCheckerII('IloveLe3tcode!')).toBe(true);
  });
  test('Example 2', () => {
    expect(strongPasswordCheckerII('Me+You--IsMyDream')).toBe(false);
  });
  test('Example 3', () => {
    expect(strongPasswordCheckerII('1aB!')).toBe(false);
  });
});
