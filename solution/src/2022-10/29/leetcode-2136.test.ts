import { earliestFullBloom } from './leetcode-2136';

describe('2022-10-29: LeetCode 2136', () => {
  test('Example 1', () => {
    const plantTime = [1, 4, 3],
      growTime = [2, 3, 1];
    expect(earliestFullBloom(plantTime, growTime)).toBe(9);
  });

  test('Example 2', () => {
    const plantTime = [1, 2, 3, 2],
      growTime = [2, 1, 2, 1];
    expect(earliestFullBloom(plantTime, growTime)).toBe(9);
  });

  test('Example 3', () => {
    const plantTime = [1],
      growTime = [1];
    expect(earliestFullBloom(plantTime, growTime)).toBe(2);
  });
});
