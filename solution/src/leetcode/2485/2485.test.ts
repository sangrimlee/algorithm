import { pivotInteger } from './2485';

describe('LeetCode 2485', () => {
  test('Example 1', () => {
    expect(pivotInteger(8)).toBe(6);
  });
  test('Example 2', () => {
    expect(pivotInteger(1)).toBe(1);
  });
  test('Example 3', () => {
    expect(pivotInteger(4)).toBe(-1);
  });
});
