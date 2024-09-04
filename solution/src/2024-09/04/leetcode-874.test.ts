import { robotSim } from './leetcode-874';

describe('2024-09-04: LeetCode 874', () => {
  test('Example 1', () => {
    expect(robotSim([4, -1, 3], [])).toEqual(25);
  });
  test('Example 2', () => {
    expect(robotSim([4, -1, 4, -2, 4], [[2, 4]])).toEqual(65);
  });
  test('Example 3', () => {
    expect(robotSim([6, -1, -1, 6], [])).toEqual(36);
  });
});
