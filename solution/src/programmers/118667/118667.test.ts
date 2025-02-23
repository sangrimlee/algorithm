import { makeEqualSum } from './118667';

describe('Programmers 118667', () => {
  test('Example 1', () => {
    expect(makeEqualSum([3, 2, 7, 2], [4, 6, 5, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(makeEqualSum([1, 2, 1, 2], [1, 10, 1, 2])).toBe(7);
  });
  test('Example 3', () => {
    expect(makeEqualSum([1, 1], [1, 5])).toBe(-1);
  });
  test('Example 4', () => {
    expect(makeEqualSum([1, 1, 1], [1, 1])).toBe(-1);
  });
});
