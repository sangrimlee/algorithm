import { practicalRobot } from './programmers-121687';

describe('2023-09-09: Programmers 121687', () => {
  test('Example 1', () => {
    expect(practicalRobot('GRGLGRG')).toEqual([2, 2]);
  });
  test('Example 2', () => {
    expect(practicalRobot('GRGRGRB')).toEqual([2, 0]);
  });
});
