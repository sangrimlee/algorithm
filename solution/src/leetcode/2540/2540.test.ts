import { getCommon } from './2540';

describe('LeetCode 2540', () => {
  test('Example 1', () => {
    expect(getCommon([1, 2, 3], [2, 4])).toBe(2);
  });
  test('Example 2', () => {
    expect(getCommon([1, 2, 3, 6], [2, 3, 4, 5])).toBe(2);
  });
});
