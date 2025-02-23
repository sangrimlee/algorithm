import { inheritance } from './121685';

describe('Programmers 121685', () => {
  test('Example 1', () => {
    expect(inheritance([[3, 5]])).toEqual(['RR']);
  });

  test('Example 2', () => {
    expect(
      inheritance([
        [3, 8],
        [2, 2],
      ]),
    ).toEqual(['rr', 'Rr']);
  });

  test('Example 3', () => {
    expect(
      inheritance([
        [3, 1],
        [2, 3],
        [3, 9],
      ]),
    ).toEqual(['RR', 'Rr', 'RR']);
  });

  test('Example 4', () => {
    expect(inheritance([[4, 26]])).toEqual(['Rr']);
  });
});
