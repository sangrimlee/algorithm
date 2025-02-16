import { numPrimeArrangements } from './leetcode-1175';

describe('2023-11-19: LeetCode 1175', () => {
  test('Example 1', () => {
    expect(numPrimeArrangements(5)).toBe(12);
  });
  test('Example 2', () => {
    expect(numPrimeArrangements(100)).toBe(682289015);
  });
});
