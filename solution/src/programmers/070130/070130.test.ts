import { solution } from './070130';

describe('Programmers 070130', () => {
  test('Example 1', () => {
    expect(solution([0])).toBe(0);
  });

  test('Example 2', () => {
    expect(solution([5, 2, 3, 3, 5, 3])).toBe(4);
  });

  test('Example 3', () => {
    expect(solution([0, 3, 3, 0, 7, 2, 0, 2, 2, 0])).toBe(8);
  });
});
