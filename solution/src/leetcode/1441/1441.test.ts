import { buildArray } from './1441';

describe('LeetCode 1441', () => {
  test('Example 1', () => {
    expect(buildArray([1, 3])).toEqual(['Push', 'Push', 'Pop', 'Push']);
  });
  test('Example 2', () => {
    expect(buildArray([1, 2, 3])).toEqual(['Push', 'Push', 'Push']);
  });
  test('Example 3', () => {
    expect(buildArray([1, 2])).toEqual(['Push', 'Push']);
  });
});
