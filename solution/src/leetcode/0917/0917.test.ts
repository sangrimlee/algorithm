import { reverseOnlyLetters } from './0917';

describe('LeetCode 0917', () => {
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
