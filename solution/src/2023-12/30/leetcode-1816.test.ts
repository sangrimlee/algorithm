import { truncateSentence } from './leetcode-1816';

describe('2023-12-30: LeetCode 1816', () => {
  test('Example 1', () => {
    expect(truncateSentence('Hello how are you Contestant', 4)).toBe('Hello how are you');
  });
  test('Example 2', () => {
    expect(truncateSentence('What is the solution to this problem', 4)).toBe(
      'What is the solution',
    );
  });
  test('Example 3', () => {
    expect(truncateSentence('chopper is not a tanuki', 5)).toBe('chopper is not a tanuki');
  });
});
