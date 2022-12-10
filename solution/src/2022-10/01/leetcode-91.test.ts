import { numDecodings } from './leetcode-91';

describe('2022-10-01: LeetCode 91', () => {
  test('Example 1', () => {
    expect(numDecodings('12')).toBe(2);
  });
  test('Example 2', () => {
    expect(numDecodings('226')).toBe(3);
  });

  test('Example 3', () => {
    expect(numDecodings('06')).toBe(0);
  });
});
