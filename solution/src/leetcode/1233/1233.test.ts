import { removeSubfolders } from './1233';

describe('LeetCode 1233', () => {
  test('Example 1', () => {
    expect(removeSubfolders(['/a', '/a/b', '/c/d', '/c/d/e', '/c/f']).sort()).toEqual([
      '/a',
      '/c/d',
      '/c/f',
    ]);
  });
  test('Example 2', () => {
    expect(removeSubfolders(['/a', '/a/b/c', '/a/b/d']).sort()).toEqual(['/a']);
  });
  test('Example 3', () => {
    expect(removeSubfolders(['/a/b/c', '/a/b/ca', '/a/b/d']).sort()).toEqual([
      '/a/b/c',
      '/a/b/ca',
      '/a/b/d',
    ]);
  });
});
