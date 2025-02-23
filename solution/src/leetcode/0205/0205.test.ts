import { isIsomorphic } from './0205';

describe('LeetCode 0205', () => {
  test('Example 1', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
  });
  test('Example 2', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false);
  });
  test('Example 3', () => {
    expect(isIsomorphic('paper', 'title')).toBe(true);
  });
});
