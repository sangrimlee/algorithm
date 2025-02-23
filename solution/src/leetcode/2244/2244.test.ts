import { minimumRounds } from './2244';

describe('LeetCode 2244', () => {
  test('Example 1', () => {
    const tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
    expect(minimumRounds(tasks)).toBe(4);
  });

  test('Example 2', () => {
    const tasks = [2, 3, 3];
    expect(minimumRounds(tasks)).toBe(-1);
  });
});
