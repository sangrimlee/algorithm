import { answerQueries } from './2389';

describe('LeetCode 2389', () => {
  test('Example 1', () => {
    const nums = [4, 5, 2, 1],
      queries = [3, 10, 21];
    expect(answerQueries(nums, queries)).toEqual([2, 3, 4]);
  });

  test('Example 2', () => {
    const nums = [2, 3, 4, 5],
      queries = [1];
    expect(answerQueries(nums, queries)).toEqual([0]);
  });
});
