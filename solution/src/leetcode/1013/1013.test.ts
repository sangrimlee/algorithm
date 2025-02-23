import { canThreePartsEqualSum } from './1013';

describe('LeetCode 1013', () => {
  test('Example 1', () => {
    expect(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toBe(true);
  });
  test('Example 2', () => {
    expect(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toBe(false);
  });
  test('Example 3', () => {
    expect(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])).toBe(true);
  });
});
