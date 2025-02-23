import { bagOfTokensScore } from './0948';

describe('LeetCode 0948', () => {
  test('Example 1', () => {
    expect(bagOfTokensScore([100], 50)).toBe(0);
  });
  test('Example 2', () => {
    expect(bagOfTokensScore([200, 100], 150)).toBe(1);
  });
  test('Example 3', () => {
    expect(bagOfTokensScore([100, 200, 300, 400], 200)).toBe(2);
  });
});
