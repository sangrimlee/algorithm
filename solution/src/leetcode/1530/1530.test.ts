import { createTree } from '@algorithm/lib';
import { countPairs } from './1530';

describe('LeetCode 1530', () => {
  test('Example 1', () => {
    expect(countPairs(createTree([1, 2, 3, null, 4]), 3)).toBe(1);
  });
  test('Example 2', () => {
    expect(countPairs(createTree([1, 2, 3, 4, 5, 6, 7]), 3)).toBe(2);
  });
  test('Example 3', () => {
    expect(
      countPairs(createTree([7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]), 3),
    ).toBe(1);
  });
});
