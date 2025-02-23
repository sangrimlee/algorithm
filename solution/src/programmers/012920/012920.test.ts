import { solution } from './012920';

describe('Programmers 012920', () => {
  test('Example 1', () => {
    expect(solution(6, [1, 2, 3])).toBe(2);
  });

  test('Example 2', () => {
    expect(solution(6, [1, 1, 1])).toBe(3);
  });

  test('Example 3', () => {
    expect(solution(6, [1, 2, 3, 4, 5, 6, 7, 8])).toBe(6);
  });
});
