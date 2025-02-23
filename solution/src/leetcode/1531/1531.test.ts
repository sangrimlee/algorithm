import { getLengthOfOptimalCompression } from './1531';

describe('LeetCode 1531', () => {
  test('Example 1', () => {
    expect(getLengthOfOptimalCompression('aaabcccd', 2)).toBe(4);
  });

  test('Example 2', () => {
    expect(getLengthOfOptimalCompression('aabbaa', 2)).toBe(2);
  });

  test('Example 3', () => {
    expect(getLengthOfOptimalCompression('aaaaaaaaaaa', 0)).toBe(3);
  });

  test('Example 4', () => {
    expect(
      getLengthOfOptimalCompression(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        0,
      ),
    ).toBe(4);
  });
});
