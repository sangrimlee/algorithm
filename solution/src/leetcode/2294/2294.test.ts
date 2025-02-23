import { partitionArray } from './2294';

describe('LeetCode 2294', () => {
  test('Example 1', () => {
    expect(partitionArray([3, 6, 1, 2, 5], 2)).toBe(2);
  });
  test('Example 2', () => {
    expect(partitionArray([1, 2, 3], 1)).toBe(2);
  });
  test('Example 3', () => {
    expect(partitionArray([2, 2, 4, 5], 0)).toBe(3);
  });
});
