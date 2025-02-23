import { selfDividingNumbers } from './0728';

describe('LeetCode 0728', () => {
  test('Example 1', () => {
    expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
  });
  test('Example 2', () => {
    expect(selfDividingNumbers(47, 85)).toEqual([48, 55, 66, 77]);
  });
});
