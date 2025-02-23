import { sortArrayByParity } from './0905';

describe('LeetCode 0905', () => {
  test('Example 1', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });
  test('Example 2', () => {
    expect(sortArrayByParity([0])).toEqual([0]);
  });
});
