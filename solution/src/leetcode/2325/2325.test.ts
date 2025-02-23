import { decodeMessage } from './2325';

describe('LeetCode 2325', () => {
  test('Example 1', () => {
    expect(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')).toBe(
      'this is a secret',
    );
  });
  test('Example 2', () => {
    expect(
      decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'),
    ).toBe('the five boxing wizards jump quickly');
  });
});
