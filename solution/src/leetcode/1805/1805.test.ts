import { numDifferentIntegers } from './1805';

describe('LeetCode 1805', () => {
  test('Example 1', () => {
    expect(numDifferentIntegers('a123bc34d8ef34')).toBe(3);
  });
  test('Example 2', () => {
    expect(numDifferentIntegers('leet1234code234')).toBe(2);
  });
  test('Example 3', () => {
    expect(numDifferentIntegers('a1b01c001')).toBe(1);
  });
});
