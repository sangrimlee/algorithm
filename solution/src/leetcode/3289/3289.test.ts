import { getSneakyNumbers } from './3289';

describe('LeetCode 3289', () => {
  function sortFn(a: number, b: number) {
    return a - b;
  }
  test('Example 1', () => {
    expect(getSneakyNumbers([0, 1, 1, 0]).sort(sortFn)).toEqual([0, 1]);
  });
  test('Example 2', () => {
    expect(getSneakyNumbers([0, 3, 2, 1, 3, 2]).sort(sortFn)).toEqual([2, 3]);
  });
  test('Example 3', () => {
    expect(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]).sort(sortFn)).toEqual([4, 5]);
  });
});
