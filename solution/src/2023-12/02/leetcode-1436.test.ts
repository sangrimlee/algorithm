import { destCity } from './leetcode-1436';

describe('2023-12-02: LeetCode 1436', () => {
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
