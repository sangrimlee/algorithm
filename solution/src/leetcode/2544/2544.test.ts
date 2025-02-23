import { alternateDigitSum } from './2544';

describe('LeetCode 2544', () => {
  test('Example 1', () => {
    expect(alternateDigitSum(521)).toBe(4);
  });
  test('Example 2', () => {
    expect(alternateDigitSum(111)).toBe(1);
  });
  test('Example 3', () => {
    expect(alternateDigitSum(886996)).toBe(0);
  });
});
