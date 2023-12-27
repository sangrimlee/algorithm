import { checkOnesSegment } from './leetcode-1784';

describe('2023-12-27: LeetCode 1784', () => {
  test('Example 1', () => {
    expect(checkOnesSegment('1001')).toBe(false);
  });
  test('Example 2', () => {
    expect(checkOnesSegment('110')).toBe(true);
  });
});
