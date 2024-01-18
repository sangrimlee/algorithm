import { drillOil } from './programmers-250136';

describe('2024-01-18: Programmers 250136', () => {
  test('Example 1', () => {
    expect(
      drillOil([
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1],
      ]),
    ).toBe(9);
  });
  test('Example 2', () => {
    expect(
      drillOil([
        [1, 0, 1, 0, 1, 1],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 1],
        [1, 0, 0, 1, 0, 0],
        [1, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
      ]),
    ).toBe(16);
  });
});
