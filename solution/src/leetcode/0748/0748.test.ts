import { shortestCompletingWord } from './0748';

describe('LeetCode 0748', () => {
  test('Example 1', () => {
    expect(shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])).toBe('steps');
  });
  test('Example 2', () => {
    expect(shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show'])).toBe('pest');
  });
});
