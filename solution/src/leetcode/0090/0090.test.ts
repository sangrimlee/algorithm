import { subsetsWithDup } from './0090';

describe('LeetCode 0090', () => {
  test('Example 1', () => {
    expect(subsetsWithDup([1, 2, 2])).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
  });
  test('Example 2', () => {
    expect(subsetsWithDup([0])).toEqual([[], [0]]);
  });
});
