import { maxConsecutiveAnswers } from './leetcode-2024';

describe('2023-07-07: LeetCode 2024', () => {
  test('Example 1', () => {
    expect(maxConsecutiveAnswers('TTFF', 2)).toEqual(4);
  });
  test('Example 2', () => {
    expect(maxConsecutiveAnswers('TFFT', 1)).toEqual(3);
  });
  test('Example 3', () => {
    expect(maxConsecutiveAnswers('TTFTTFTT', 1)).toEqual(5);
  });
});
