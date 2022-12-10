import { reverseWords } from './leetcode-557';

describe('2022-09-22 LeetCode 557', () => {
  test('Example 1', () => {
    const s = "Let's take LeetCode contest";
    expect(reverseWords(s)).toBe("s'teL ekat edoCteeL tsetnoc");
  });

  test('Example 2', () => {
    const s = 'God Ding';
    expect(reverseWords(s)).toBe('doG gniD');
  });
});
