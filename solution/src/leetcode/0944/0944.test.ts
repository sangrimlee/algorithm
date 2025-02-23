import { minDeletionSize } from './0944';

describe('LeetCode 0944', () => {
  test('Example 1', () => {
    const strs = ['cba', 'daf', 'ghi'];
    expect(minDeletionSize(strs)).toBe(1);
  });

  test('Example 2', () => {
    const strs = ['a', 'b'];
    expect(minDeletionSize(strs)).toBe(0);
  });

  test('Example 3', () => {
    const strs = ['zyx', 'wvu', 'tsr'];
    expect(minDeletionSize(strs)).toBe(3);
  });

  test('Example 4', () => {
    const strs = ['rrjk', 'furt', 'guzm'];
    expect(minDeletionSize(strs)).toBe(2);
  });
});
