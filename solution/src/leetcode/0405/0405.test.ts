import { toHex } from './0405';

describe('LeetCode 0405', () => {
  test('Example 1', () => {
    expect(toHex(26)).toBe('1a');
  });
  test('Example 2', () => {
    expect(toHex(-1)).toBe('ffffffff');
  });
});
