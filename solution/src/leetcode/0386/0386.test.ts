import { lexicalOrder } from './0386';

describe('LeetCode 0386', () => {
  test('Example 1', () => {
    expect(lexicalOrder(13)).toEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('Example 2', () => {
    expect(lexicalOrder(2)).toEqual([1, 2]);
  });
});
