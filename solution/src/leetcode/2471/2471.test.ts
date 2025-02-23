import { createTree } from '@algorithm/lib';
import { minimumOperations } from './2471';

describe('LeetCode 2471', () => {
  test('Example 1', () => {
    expect(
      minimumOperations(createTree([1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10])),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(minimumOperations(createTree([1, 3, 2, 7, 6, 5, 4]))).toBe(3);
  });
  test('Example 3', () => {
    expect(minimumOperations(createTree([1, 2, 3, 4, 5, 6]))).toBe(0);
  });
});
