import { coloredCells } from './2579';

describe('LeetCode 2579', () => {
  test('Example 1', () => {
    expect(coloredCells(1)).toBe(1);
  });
  test('Example 2', () => {
    expect(coloredCells(2)).toBe(5);
  });
  test('Example 3', () => {
    expect(coloredCells(1000)).toBe(1998001);
  });
});
