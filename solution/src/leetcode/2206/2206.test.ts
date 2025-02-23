import { divideArray } from './2206';

describe('LeetCode 2206', () => {
  test('Example 1', () => {
    expect(divideArray([3, 2, 3, 2, 2, 2])).toBe(true);
  });
  test('Example 2', () => {
    expect(divideArray([1, 2, 3, 4])).toBe(false);
  });
});
