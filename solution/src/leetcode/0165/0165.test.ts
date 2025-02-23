import { compareVersion } from './0165';

describe('LeetCode 0165', () => {
  test('Example 1', () => {
    expect(compareVersion('1.01', '1.001')).toBe(0);
  });
  test('Example 2', () => {
    expect(compareVersion('1.0', '1.0.0')).toBe(0);
  });
  test('Example 3', () => {
    expect(compareVersion('0.1', '1.1')).toBe(-1);
  });
});
