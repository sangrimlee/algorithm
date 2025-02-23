import { restoreMatrix } from './1605';

describe('LeetCode 1605', () => {
  test('Example 1', () => {
    expect(restoreMatrix([3, 8], [4, 7])).toEqual([
      [3, 0],
      [1, 7],
    ]);
  });
  test('Example 2', () => {
    expect(restoreMatrix([5, 7, 10], [8, 6, 8])).toEqual([
      [5, 0, 0],
      [3, 4, 0],
      [0, 2, 8],
    ]);
  });
});
