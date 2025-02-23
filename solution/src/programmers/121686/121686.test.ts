import { operatingSystem } from './121686';

describe('Programmers 121686', () => {
  test('Example 1', () => {
    expect(
      operatingSystem([
        [2, 0, 10],
        [1, 5, 5],
        [3, 5, 3],
        [3, 12, 2],
      ]),
    ).toEqual([20, 5, 0, 16, 0, 0, 0, 0, 0, 0, 0]);
  });
  test('Example 2', () => {
    expect(
      operatingSystem([
        [3, 6, 4],
        [4, 2, 5],
        [1, 0, 5],
        [5, 0, 5],
      ]),
    ).toEqual([19, 0, 0, 4, 3, 14, 0, 0, 0, 0, 0]);
  });
});
