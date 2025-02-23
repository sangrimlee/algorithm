import { practicalRobot } from './121687';

describe('LeetCode 121687', () => {
  test('Example 1', () => {
    expect(practicalRobot('GRGLGRG')).toEqual([2, 2]);
  });
  test('Example 2', () => {
    expect(practicalRobot('GRGRGRB')).toEqual([2, 0]);
  });
});
