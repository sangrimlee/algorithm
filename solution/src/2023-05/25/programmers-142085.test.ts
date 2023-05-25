import { defenseGame } from './programmers-142085';

describe('2023-05-25: Programmers 142085', () => {
  test('Example 1', () => {
    expect(defenseGame(7, 3, [4, 2, 4, 5, 3, 3, 1])).toEqual(5);
  });
  test('Example 2', () => {
    expect(defenseGame(2, 4, [3, 3, 3, 3])).toEqual(4);
  });
});
