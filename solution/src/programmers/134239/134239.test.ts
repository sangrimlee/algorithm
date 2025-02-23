import { hailStoneNumberDefiniteIntegral } from './134239';

describe('Programmers 134239', () => {
  test('Example 1', () => {
    expect(
      hailStoneNumberDefiniteIntegral(5, [
        [0, 0],
        [0, -1],
        [2, -3],
        [3, -3],
      ]),
    ).toEqual([33.0, 31.5, 0.0, -1.0]);
  });
});
