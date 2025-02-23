import { robotSim } from './0874';

describe('LeetCode 0874', () => {
  test('Example 1', () => {
    expect(robotSim([4, -1, 3], [])).toBe(25);
  });
  test('Example 2', () => {
    expect(robotSim([4, -1, 4, -2, 4], [[2, 4]])).toBe(65);
  });
  test('Example 3', () => {
    expect(robotSim([6, -1, -1, 6], [])).toBe(36);
  });
});
