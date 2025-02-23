import { occurrencesOfElement } from './3159';

describe('LeetCode 3159', () => {
  test('Example 1', () => {
    expect(occurrencesOfElement([1, 3, 1, 7], [1, 3, 2, 4], 1)).toEqual([0, -1, 2, -1]);
  });
  test('Example 2', () => {
    expect(occurrencesOfElement([1, 2, 3], [10], 5)).toEqual([-1]);
  });
});
