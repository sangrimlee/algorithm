import { maximumLengthSubstring } from './3090';

describe('LeetCode 3090', () => {
  test('Example 1', () => {
    expect(maximumLengthSubstring('bcbbbcba')).toBe(4);
  });
  test('Example 2', () => {
    expect(maximumLengthSubstring('aaaa')).toBe(2);
  });
});
