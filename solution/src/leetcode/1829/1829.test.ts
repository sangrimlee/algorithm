import { getMaximumXor } from './1829';

describe('LeetCode 1829', () => {
  test('Example 1', () => {
    expect(getMaximumXor([0, 1, 1, 3], 2)).toEqual([0, 3, 2, 3]);
  });
  test('Example 2', () => {
    expect(getMaximumXor([2, 3, 4, 7], 3)).toEqual([5, 2, 6, 5]);
  });
  test('Example 3', () => {
    expect(getMaximumXor([0, 1, 2, 2, 5, 7], 3)).toEqual([4, 3, 6, 4, 6, 7]);
  });
});
