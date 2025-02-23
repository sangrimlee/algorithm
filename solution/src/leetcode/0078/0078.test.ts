import { subsets } from './0078';

describe('LeetCode 0078', () => {
  test('Example 1', () => {
    expect(subsets([1, 2, 3])).toEqual([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]);
  });
  test('Example 2', () => {
    expect(subsets([0])).toEqual([[0], []]);
  });
});
