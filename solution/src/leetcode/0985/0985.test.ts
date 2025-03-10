import { sumEvenAfterQueries } from './0985';

describe('LeetCode 0985', () => {
  test('Example 1', () => {
    const nums = [1, 2, 3, 4];
    const queries = [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ];
    expect(sumEvenAfterQueries(nums, queries)).toEqual([8, 6, 2, 4]);
  });

  test('Example 2', () => {
    const nums = [1];
    const queries = [[4, 0]];
    expect(sumEvenAfterQueries(nums, queries)).toEqual([0]);
  });
});
