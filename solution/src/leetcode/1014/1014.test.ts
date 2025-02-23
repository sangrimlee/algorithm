import { maxScoreSightseeingPair } from './1014';

describe('LeetCode 1014', () => {
  test('Example 1', () => {
    expect(maxScoreSightseeingPair([8, 1, 5, 2, 6])).toBe(11);
  });
  test('Example 2', () => {
    expect(maxScoreSightseeingPair([1, 2])).toBe(2);
  });
});
