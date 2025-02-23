import { displayTable } from './1418';

describe('LeetCode 1418', () => {
  test('Example 1', () => {
    expect(
      displayTable([
        ['David', '3', 'Ceviche'],
        ['Corina', '10', 'Beef Burrito'],
        ['David', '3', 'Fried Chicken'],
        ['Carla', '5', 'Water'],
        ['Carla', '5', 'Ceviche'],
        ['Rous', '3', 'Ceviche'],
      ]),
    ).toEqual([
      ['Table', 'Beef Burrito', 'Ceviche', 'Fried Chicken', 'Water'],
      ['3', '0', '2', '1', '0'],
      ['5', '0', '1', '0', '1'],
      ['10', '1', '0', '0', '0'],
    ]);
  });
  test('Example 2', () => {
    expect(
      displayTable([
        ['James', '12', 'Fried Chicken'],
        ['Ratesh', '12', 'Fried Chicken'],
        ['Amadeus', '12', 'Fried Chicken'],
        ['Adam', '1', 'Canadian Waffles'],
        ['Brianna', '1', 'Canadian Waffles'],
      ]),
    ).toEqual([
      ['Table', 'Canadian Waffles', 'Fried Chicken'],
      ['1', '2', '0'],
      ['12', '0', '3'],
    ]);
  });
  test('Example 3', () => {
    expect(
      displayTable([
        ['Laura', '2', 'Bean Burrito'],
        ['Jhon', '2', 'Beef Burrito'],
        ['Melissa', '2', 'Soda'],
      ]),
    ).toEqual([
      ['Table', 'Bean Burrito', 'Beef Burrito', 'Soda'],
      ['2', '1', '1', '1'],
    ]);
  });
});
