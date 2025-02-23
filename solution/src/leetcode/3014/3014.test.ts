import { minimumPushes } from './3014';

describe('LeetCode 3014', () => {
  test('Example 1', () => {
    expect(minimumPushes('abcde')).toBe(5);
  });
  test('Example 2', () => {
    expect(minimumPushes('xycdefghij')).toBe(12);
  });
});
