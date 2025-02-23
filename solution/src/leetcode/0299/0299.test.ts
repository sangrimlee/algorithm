import { getHint } from './0299';

describe('LeetCode 0299', () => {
  test('Example 1', () => {
    expect(getHint('1807', '7810')).toBe('1A3B');
  });
  test('Example 2', () => {
    expect(getHint('1123', '0111')).toBe('1A1B');
  });
});
