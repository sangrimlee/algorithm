import { countTime } from './2437';

describe('LeetCode 2437', () => {
  test('Example 1', () => {
    expect(countTime('?5:00')).toBe(2);
  });
  test('Example 2', () => {
    expect(countTime('0?:0?')).toBe(100);
  });
  test('Example 3', () => {
    expect(countTime('??:??')).toBe(1440);
  });
});
