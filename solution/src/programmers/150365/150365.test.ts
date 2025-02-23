import { escapeMaze } from './150365';

describe('Programmers 150365', () => {
  test('Example 1', () => {
    expect(escapeMaze(3, 4, 2, 3, 3, 1, 5)).toBe('dllrl');
  });
  test('Example 2', () => {
    expect(escapeMaze(2, 2, 1, 1, 2, 2, 2)).toBe('dr');
  });
  test('Example 3', () => {
    expect(escapeMaze(3, 3, 1, 2, 3, 3, 4)).toBe('impossible');
  });
});
