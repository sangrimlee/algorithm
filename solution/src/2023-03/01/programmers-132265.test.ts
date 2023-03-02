import { solution } from './programmers-132265';

describe('2023-03-02: Programmers 132265', () => {
  test('Example 1', () => {
    expect(solution([1, 2, 1, 3, 1, 4, 1, 2])).toBe(2);
  });

  test('Example 2', () => {
    expect(solution([1, 2, 3, 1, 4])).toBe(0);
  });
});
