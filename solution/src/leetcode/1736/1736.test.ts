import { maximumTime } from './1736';

describe('LeetCode 1736', () => {
  test('Example 1', () => {
    expect(maximumTime('2?:?0')).toBe('23:50');
  });
  test('Example 2', () => {
    expect(maximumTime('0?:3?')).toBe('09:39');
  });
  test('Example 3', () => {
    expect(maximumTime('1?:22')).toBe('19:22');
  });
});
