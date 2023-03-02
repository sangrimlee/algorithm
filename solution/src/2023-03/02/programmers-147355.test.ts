import { solution } from './programmers-147355';

describe('2023-03-02: Programmers 147355', () => {
  test('Example 1', () => {
    expect(solution('3141592', '271')).toBe(2);
  });

  test('Example 2', () => {
    expect(solution('500220839878', '7')).toBe(8);
  });

  test('Example 3', () => {
    expect(solution('10203', '15')).toBe(3);
  });
});
