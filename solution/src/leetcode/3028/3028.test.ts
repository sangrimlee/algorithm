import { returnToBoundaryCount } from './3028';

describe('LeetCode 3028', () => {
  test('Example 1', () => {
    expect(returnToBoundaryCount([2, 3, -5])).toBe(1);
  });
  test('Example 2', () => {
    expect(returnToBoundaryCount([3, 2, -3, -4])).toBe(0);
  });
});
