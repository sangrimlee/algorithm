import { commonChars } from './leetcode-1002';

describe('2023-11-09: LeetCode 1002', () => {
  test('Example 1', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toEqual(['e', 'l', 'l']);
  });
  test('Example 2', () => {
    expect(commonChars(['cool', 'lock', 'cook'])).toEqual(['c', 'o']);
  });
});
