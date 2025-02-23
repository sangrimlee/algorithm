import { decode } from './1720';

describe('LeetCode 1720', () => {
  test('Example 1', () => {
    expect(decode([1, 2, 3], 1)).toEqual([1, 0, 2, 1]);
  });
  test('Example 2', () => {
    expect(decode([6, 2, 7, 3], 4)).toEqual([4, 2, 0, 7, 4]);
  });
});
