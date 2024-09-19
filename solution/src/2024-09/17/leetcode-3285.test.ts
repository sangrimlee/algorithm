import { stableMountains } from './leetcode-3285';

describe('2024-09-19: LeetCode 3285', () => {
  test('Example 1', () => {
    expect(stableMountains([1, 2, 3, 4, 5], 2)).toEqual([3, 4]);
  });
  test('Example 2', () => {
    expect(stableMountains([10, 1, 10, 1, 10], 3)).toEqual([1, 3]);
  });
  test('Example 3', () => {
    expect(stableMountains([10, 1, 10, 1, 10], 10)).toEqual([]);
  });
});
