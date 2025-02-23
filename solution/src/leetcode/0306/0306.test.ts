import { isAdditiveNumber } from './0306';

describe('LeetCode 0306', () => {
  test('Example 1', () => {
    expect(isAdditiveNumber('112358')).toBe(true);
  });
  test('Example 2', () => {
    expect(isAdditiveNumber('199100199')).toBe(true);
  });
});
