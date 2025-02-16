import { SeatManager } from './leetcode-1845';

describe('2023-11-06: LeetCode 1845', () => {
  test('Example 1', () => {
    const seatManager = new SeatManager(5);

    expect(seatManager.reserve()).toBe(1);
    expect(seatManager.reserve()).toBe(2);
    seatManager.unreserve(2);
    expect(seatManager.reserve()).toBe(2);
    expect(seatManager.reserve()).toBe(3);
    expect(seatManager.reserve()).toBe(4);
    expect(seatManager.reserve()).toBe(5);
    expect(() => seatManager.reserve()).toThrow('There are no unreserved seats.');
    seatManager.unreserve(5);
    expect(seatManager.reserve()).toBe(5);
  });
});
