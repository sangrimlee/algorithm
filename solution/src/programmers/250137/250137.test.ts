import { windBandage } from './250137';

describe('Programmers 250137', () => {
  test('Example 1', () => {
    expect(
      windBandage([5, 1, 5], 30, [
        [2, 10],
        [9, 15],
        [10, 5],
        [11, 5],
      ]),
    ).toBe(5);
  });
  test('Example 2', () => {
    expect(
      windBandage([3, 2, 7], 20, [
        [1, 15],
        [5, 16],
        [8, 6],
      ]),
    ).toBe(-1);
  });
  test('Example 3', () => {
    expect(
      windBandage([4, 2, 7], 20, [
        [1, 15],
        [5, 16],
        [8, 6],
      ]),
    ).toBe(-1);
  });
  test('Example 4', () => {
    expect(
      windBandage([1, 1, 1], 5, [
        [1, 2],
        [3, 2],
      ]),
    ).toBe(3);
  });
});
