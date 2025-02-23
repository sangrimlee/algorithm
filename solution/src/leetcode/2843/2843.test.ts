import { countSymmetricIntegers } from './2843';

describe('LeetCode 2843', () => {
  test('Example 1', () => {
    expect(countSymmetricIntegers(1, 100)).toBe(9);
  });
  test('Example 2', () => {
    expect(countSymmetricIntegers(1200, 1230)).toBe(4);
  });
});
