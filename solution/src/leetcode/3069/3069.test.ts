import { resultArray } from './3069';

describe('LeetCode 3069', () => {
  test('Example 1', () => {
    expect(resultArray([2, 1, 3])).toEqual([2, 3, 1]);
  });
  test('Example 2', () => {
    expect(resultArray([5, 4, 3, 8])).toEqual([5, 3, 4, 8]);
  });
});
