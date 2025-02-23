import { maximumPopulation } from './1854';

describe('LeetCode 1854', () => {
  test('Example 1', () => {
    expect(
      maximumPopulation([
        [1993, 1999],
        [2000, 2010],
      ]),
    ).toBe(1993);
  });
  test('Example 2', () => {
    expect(
      maximumPopulation([
        [1950, 1961],
        [1960, 1971],
        [1970, 1981],
      ]),
    ).toBe(1960);
  });
});
