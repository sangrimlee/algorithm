import { countDays } from './3169';

describe('LeetCode 3169', () => {
  test('Example 1', () => {
    expect(
      countDays(10, [
        [5, 7],
        [1, 3],
        [9, 10],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      countDays(5, [
        [2, 4],
        [1, 3],
      ]),
    ).toBe(1);
  });
  test('Example 3', () => {
    expect(countDays(6, [[1, 6]])).toBe(0);
  });

  test('Example 4', () => {
    expect(
      countDays(57, [
        [3, 49],
        [23, 44],
        [21, 56],
        [26, 55],
        [23, 52],
        [2, 9],
        [1, 48],
        [3, 31],
      ]),
    ).toBe(1);
  });
});
