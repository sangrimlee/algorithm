import { pathInZigZagTree } from './1104';

describe('LeetCode 1104', () => {
  test('Example 1', () => {
    expect(pathInZigZagTree(14)).toEqual([1, 3, 4, 14]);
  });
  test('Example 2', () => {
    expect(pathInZigZagTree(26)).toEqual([1, 2, 6, 10, 26]);
  });
});
