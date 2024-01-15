import { cardGame } from './programmers-258707';

describe('2024-01-15: Programmers 258707', () => {
  test('Example 1', () => {
    expect(cardGame(4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4])).toBe(5);
  });
  test('Example 2', () => {
    expect(cardGame(3, [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11, 12])).toBe(2);
  });
  test('Example 3', () => {
    expect(cardGame(2, [5, 8, 1, 2, 9, 4, 12, 11, 3, 10, 6, 7])).toBe(4);
  });
  test('Example 4', () => {
    expect(cardGame(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])).toBe(1);
  });
});
