import { canVisitAllRooms } from './leetcode-841';

describe('2022-12-20: LeetCode 841', () => {
  test('Example 1', () => {
    const rooms = [[1], [2], [3], []];
    expect(canVisitAllRooms(rooms)).toBeTruthy();
  });

  test('Example 2', () => {
    const rooms = [[1, 3], [3, 0, 1], [2], [0]];
    expect(canVisitAllRooms(rooms)).toBeFalsy();
  });
});
