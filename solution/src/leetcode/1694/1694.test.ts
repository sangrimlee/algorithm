import { reformatNumber } from './1694';

describe('LeetCode 1694', () => {
  test('Example 1', () => {
    expect(reformatNumber('1-23-45 6')).toBe('123-456');
  });
  test('Example 2', () => {
    expect(reformatNumber('123 4-567')).toBe('123-45-67');
  });
  test('Example 3', () => {
    expect(reformatNumber('123 4-5678')).toBe('123-456-78');
  });
});
