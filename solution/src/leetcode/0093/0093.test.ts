import { restoreIpAddresses } from './0093';

describe('LeetCode 0093', () => {
  test('Example 1', () => {
    expect(restoreIpAddresses('25525511135')).toEqual(['255.255.11.135', '255.255.111.35']);
  });
  test('Example 2', () => {
    expect(restoreIpAddresses('0000')).toEqual(['0.0.0.0']);
  });
  test('Example 3', () => {
    expect(restoreIpAddresses('101023')).toEqual([
      '1.0.10.23',
      '1.0.102.3',
      '10.1.0.23',
      '10.10.2.3',
      '101.0.2.3',
    ]);
  });
});
