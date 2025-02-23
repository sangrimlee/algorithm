import { hasAllCodes } from './1461';

describe('LeetCode 1461', () => {
  test('Example 1', () => {
    const s = '00110110';
    const k = 2;

    expect(hasAllCodes(s, k)).toBe(true);
  });

  test('Example 2', () => {
    const s = '0110';
    const k = 1;

    expect(hasAllCodes(s, k)).toBe(true);
  });

  test('Example 3', () => {
    const s = '0110';
    const k = 2;

    expect(hasAllCodes(s, k)).toBe(false);
  });
});
