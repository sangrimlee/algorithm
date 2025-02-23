import { countBits } from './0338';

describe('LeetCode 0338', () => {
  test('Example 1', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });
  test('Example 2', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
