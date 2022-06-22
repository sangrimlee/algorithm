import { solution } from './programmers-12920';

describe('2022-06-22: Programmers 12920', () => {
  test('Example 1', () => {
    expect(solution(6, [1, 2, 3])).toBe(2);
  });

  test('Example 2', () => {
    expect(solution(6, [1, 1, 1])).toBe(3);
  });

  test('Example 2', () => {
    expect(solution(6, [1, 2, 3, 4, 5, 6, 7, 8])).toBe(6);
  });
});
