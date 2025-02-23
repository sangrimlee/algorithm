import { minimumPushes } from './3016';

describe('LeetCode 3016', () => {
  test('Example 1', () => {
    expect(minimumPushes('abcde')).toBe(5);
  });
  test('Example 2', () => {
    expect(minimumPushes('xyzxyzxyzxyz')).toBe(12);
  });
  test('Example 3', () => {
    expect(minimumPushes('aabbccddeeffgghhiiiiii')).toBe(24);
  });
});
