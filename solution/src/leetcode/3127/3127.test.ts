import { canMakeSquare } from './3127';

describe('LeetCode 3127', () => {
  test('Example 1', () => {
    expect(
      canMakeSquare([
        ['B', 'W', 'B'],
        ['B', 'W', 'W'],
        ['B', 'W', 'B'],
      ]),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      canMakeSquare([
        ['B', 'W', 'B'],
        ['W', 'B', 'W'],
        ['B', 'W', 'B'],
      ]),
    ).toBe(false);
  });
  test('Example 3', () => {
    expect(
      canMakeSquare([
        ['B', 'W', 'B'],
        ['B', 'W', 'W'],
        ['B', 'W', 'W'],
      ]),
    ).toBe(true);
  });
});
