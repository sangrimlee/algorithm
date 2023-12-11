import { multiply } from './leetcode-43';

describe('2023-12-11: LeetCode 43', () => {
  test('Example 1', () => {
    expect(multiply('2', '3')).toBe('6');
  });
  test('Example 2', () => {
    expect(multiply('123', '456')).toBe('56088');
  });
});
