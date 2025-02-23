import { maxConsecutiveAnswers } from './2024';

describe('LeetCode 2024', () => {
  test('Example 1', () => {
    expect(maxConsecutiveAnswers('TTFF', 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(maxConsecutiveAnswers('TFFT', 1)).toBe(3);
  });
  test('Example 3', () => {
    expect(maxConsecutiveAnswers('TTFTTFTT', 1)).toBe(5);
  });
});
