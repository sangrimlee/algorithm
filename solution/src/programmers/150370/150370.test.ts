import { validPrivacies } from './150370';

describe('Programmers 150370', () => {
  test('Example 1', () => {
    expect(
      validPrivacies(
        '2022.05.19',
        ['A 6', 'B 12', 'C 3'],
        ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
      ),
    ).toEqual([1, 3]);
  });
  test('Example 2', () => {
    expect(
      validPrivacies(
        '2020.01.01',
        ['Z 3', 'D 5'],
        ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'],
      ),
    ).toEqual([1, 4, 5]);
  });
});
