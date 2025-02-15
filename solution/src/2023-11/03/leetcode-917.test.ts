import { reverseOnlyLetters } from './leetcode-917';

describe('2023-11-03: LeetCode 917', () => {
  test('Example 1', () => {
    expect(reverseOnlyLetters('ab-cd')).toBe('dc-ba');
  });
  test('Example 2', () => {
    expect(reverseOnlyLetters('a-bC-dEf-ghIj')).toBe('j-Ih-gfE-dCba');
  });
  test('Example 3', () => {
    expect(reverseOnlyLetters('Test1ng-Leet=code-Q!')).toBe('Qedo1ct-eeLg=ntse-T!');
  });
});
