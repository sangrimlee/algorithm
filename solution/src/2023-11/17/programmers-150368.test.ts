import { saleEmoticons } from './programmers-150368';

describe('2023-11-17: Programmers 150368', () => {
  test('Example 1', () => {
    expect(
      saleEmoticons(
        [
          [40, 10000],
          [25, 10000],
        ],
        [7000, 9000],
      ),
    ).toEqual([1, 5400]);
  });
  test('Example 2', () => {
    expect(
      saleEmoticons(
        [
          [40, 2900],
          [23, 10000],
          [11, 5200],
          [5, 5900],
          [40, 3100],
          [27, 9200],
          [32, 6900],
        ],
        [1300, 1500, 1600, 4900],
      ),
    ).toEqual([4, 13860]);
  });
});
