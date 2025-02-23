import { trackMeet } from './121684';

describe('Programmers 121684', () => {
  test('Example 1', () => {
    expect(
      trackMeet([
        [40, 10, 10],
        [20, 5, 0],
        [30, 30, 30],
        [70, 0, 70],
        [100, 100, 100],
      ]),
    ).toBe(210);
  });
  test('Example 2', () => {
    expect(
      trackMeet([
        [20, 30],
        [30, 20],
        [20, 30],
      ]),
    ).toBe(60);
  });
});
