import { slowestKey } from './1629';

describe('LeetCode 1629', () => {
  test('Example 1', () => {
    expect(slowestKey([9, 29, 49, 50], 'cbcd')).toBe('c');
  });
  test('Example 2', () => {
    expect(slowestKey([12, 23, 36, 46, 62], 'spuda')).toBe('a');
  });
});
