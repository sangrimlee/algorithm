import { calculate } from './0227';

describe('LeetCode 0227', () => {
  test('Example 1', () => {
    expect(calculate('3+2*2')).toBe(7);
  });
  test('Example 2', () => {
    expect(calculate('3/2')).toBe(1);
  });
  test('Example 3', () => {
    expect(calculate('3+5 / 2 ')).toBe(5);
  });

  test('Example 4', () => {
    expect(calculate('14-3/2')).toBe(13);
  });
});
