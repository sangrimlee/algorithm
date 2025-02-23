import { furthestDistanceFromOrigin } from './2833';

describe('LeetCode 2833', () => {
  test('Example 1', () => {
    expect(furthestDistanceFromOrigin('L_RL__R')).toBe(3);
  });
  test('Example 2', () => {
    expect(furthestDistanceFromOrigin('_R__LL_')).toBe(5);
  });
  test('Example 3', () => {
    expect(furthestDistanceFromOrigin('_______')).toBe(7);
  });
});
