import { findDelayedArrivalTime } from './2651';

describe('LeetCode 2651', () => {
  test('Example 1', () => {
    expect(findDelayedArrivalTime(15, 5)).toBe(20);
  });
  test('Example 2', () => {
    expect(findDelayedArrivalTime(13, 11)).toBe(0);
  });
});
