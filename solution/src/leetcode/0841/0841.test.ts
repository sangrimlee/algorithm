import { canVisitAllRooms } from './0841';

describe('LeetCode 0841', () => {
  test('Example 1', () => {
    const rooms = [[1], [2], [3], []];
    expect(canVisitAllRooms(rooms)).toBeTruthy();
  });

  test('Example 2', () => {
    const rooms = [[1, 3], [3, 0, 1], [2], [0]];
    expect(canVisitAllRooms(rooms)).toBeFalsy();
  });
});
