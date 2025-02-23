import { numPrimeArrangements } from './1175';

describe('LeetCode 1175', () => {
  test('Example 1', () => {
    expect(numPrimeArrangements(5)).toBe(12);
  });
  test('Example 2', () => {
    expect(numPrimeArrangements(100)).toBe(682289015);
  });
});
