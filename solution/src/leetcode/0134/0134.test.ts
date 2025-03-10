import { canCompleteCircuit } from './0134';

describe('LeetCode 0134', () => {
  test('Example 1', () => {
    const gas = [1, 2, 3, 4, 5],
      cost = [3, 4, 5, 1, 2];
    expect(canCompleteCircuit(gas, cost)).toBe(3);
  });

  test('Example 2', () => {
    const gas = [2, 3, 4],
      cost = [3, 4, 3];
    expect(canCompleteCircuit(gas, cost)).toBe(-1);
  });
});
