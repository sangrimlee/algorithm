import { selectDice } from './258709';

describe('Programmers 258709', () => {
  test('Example 1', () => {
    expect(
      selectDice([
        [1, 2, 3, 4, 5, 6],
        [3, 3, 3, 3, 4, 4],
        [1, 3, 3, 4, 4, 4],
        [1, 1, 4, 4, 5, 5],
      ]),
    ).toEqual([1, 4]);
  });
  test('Example 2', () => {
    expect(
      selectDice([
        [1, 2, 3, 4, 5, 6],
        [2, 2, 4, 4, 6, 6],
      ]),
    ).toEqual([2]);
  });
  test('Example 3', () => {
    expect(
      selectDice([
        [40, 41, 42, 43, 44, 45],
        [43, 43, 42, 42, 41, 41],
        [1, 1, 80, 80, 80, 80],
        [70, 70, 1, 1, 70, 70],
      ]),
    ).toEqual([1, 3]);
  });
});
