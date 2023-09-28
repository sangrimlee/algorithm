import { readBinaryWatch } from './leetcode-401';

describe('2023-09-28: LeetCode 401', () => {
  test('Example 1', () => {
    expect(readBinaryWatch(1)).toEqual([
      '0:01',
      '0:02',
      '0:04',
      '0:08',
      '0:16',
      '0:32',
      '1:00',
      '2:00',
      '4:00',
      '8:00',
    ]);
  });
  test('Example 2', () => {
    expect(readBinaryWatch(9)).toEqual([]);
  });
});
