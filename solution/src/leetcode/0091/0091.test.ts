import { numDecodings } from './0091';

describe('LeetCode 0091', () => {
  test('Example 1', () => {
    expect(numDecodings('12')).toBe(2);
  });
  test('Example 2', () => {
    expect(numDecodings('226')).toBe(3);
  });

  test('Example 3', () => {
    expect(numDecodings('06')).toBe(0);
  });
});
