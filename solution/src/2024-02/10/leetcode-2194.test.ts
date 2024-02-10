import { cellsInRange } from './leetcode-2194';

describe('2024-02-10: LeetCode 2194', () => {
  test('Example 1', () => {
    expect(cellsInRange('K1:L2')).toEqual(['K1', 'K2', 'L1', 'L2']);
  });
  test('Example 2', () => {
    expect(cellsInRange('A1:F1')).toEqual(['A1', 'B1', 'C1', 'D1', 'E1', 'F1']);
  });
});
