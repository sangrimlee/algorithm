import { countMoutainTile } from './programmers-258705';

describe('2024-01-13: Programmers 258705', () => {
  test('Example 1', () => {
    expect(countMoutainTile(4, [1, 1, 0, 1])).toBe(149);
  });
  test('Example 2', () => {
    expect(countMoutainTile(2, [0, 1])).toBe(11);
  });
  test('Example 3', () => {
    expect(countMoutainTile(10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(7704);
  });
});
