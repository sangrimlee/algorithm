import { constructTransformedArray } from './3379';

describe('LeetCode 3379', () => {
  test('Example 1', () => {
    expect(constructTransformedArray([3, -2, 1, 1])).toEqual([1, 1, 1, 3]);
  });
  test('Example 2', () => {
    expect(constructTransformedArray([-1, 4, -1])).toEqual([-1, -1, 4]);
  });
});
