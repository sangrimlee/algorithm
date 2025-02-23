import { minimumTime } from './2187';

describe('LeetCode 2187', () => {
  test('Example 1', () => {
    const time = [1, 2, 3],
      totalTrips = 5;
    expect(minimumTime(time, totalTrips)).toBe(3);
  });

  test('Example 2', () => {
    const time = [2],
      totalTrips = 1;
    expect(minimumTime(time, totalTrips)).toBe(2);
  });
});
