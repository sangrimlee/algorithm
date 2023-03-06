import { salePromotion } from './programmers-131127';

describe('2023-03-06: Programmers 131127', () => {
  test('Example 1', () => {
    expect(
      salePromotion(
        ['banana', 'apple', 'rice', 'pork', 'pot'],
        [3, 2, 2, 2, 1],
        [
          'chicken',
          'apple',
          'apple',
          'banana',
          'rice',
          'apple',
          'pork',
          'banana',
          'pork',
          'rice',
          'pot',
          'banana',
          'apple',
          'banana',
        ],
      ),
    ).toBe(3);
  });

  test('Example 2', () => {
    expect(
      salePromotion(
        ['apple'],
        [10],
        [
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
        ],
      ),
    ).toBe(0);
  });
});
