import { findDifferentBinaryString } from './1980';

describe('LeetCode 1980', () => {
  test('Example 1', () => {
    const nums = ['01', '10'];
    const answer = findDifferentBinaryString(nums);
    expect(nums).not.toContain(answer);
  });
  test('Example 2', () => {
    const nums = ['00', '01'];
    const answer = findDifferentBinaryString(nums);
    expect(nums).not.toContain(answer);
  });
  test('Example 3', () => {
    const nums = ['111', '011', '001'];
    const answer = findDifferentBinaryString(nums);
    expect(nums).not.toContain(answer);
  });
});
