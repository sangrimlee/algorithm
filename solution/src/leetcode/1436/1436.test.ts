import { destCity } from './1436';

describe('LeetCode 1436', () => {
  test('Example 1', () => {
    expect(
      destCity([
        ['London', 'New York'],
        ['New York', 'Lima'],
        ['Lima', 'Sao Paulo'],
      ]),
    ).toBe('Sao Paulo');
  });
  test('Example 2', () => {
    expect(
      destCity([
        ['B', 'C'],
        ['D', 'B'],
        ['C', 'A'],
      ]),
    ).toBe('A');
  });
  test('Example 3', () => {
    expect(destCity([['A', 'Z']])).toBe('Z');
  });
});
