import { repeatLimitedString } from './leetcode-2182';

describe('2024-12-17: LeetCode 2182', () => {
  test('Example 1', () => {
    expect(repeatLimitedString('cczazcc', 3)).toBe('zzcccac');
  });
  test('Example 2', () => {
    expect(repeatLimitedString('aababab', 2)).toBe('bbabaa');
  });
});
