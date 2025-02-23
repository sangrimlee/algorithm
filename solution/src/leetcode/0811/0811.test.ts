import { subdomainVisits } from './0811';

describe('LeetCode 0811', () => {
  test('Example 1', () => {
    expect(subdomainVisits(['9001 discuss.leetcode.com'])).toEqual([
      '9001 com',
      '9001 leetcode.com',
      '9001 discuss.leetcode.com',
    ]);
  });
  test('Example 2', () => {
    expect(
      subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org']),
    ).toEqual([
      '951 com',
      '901 mail.com',
      '900 google.mail.com',
      '50 yahoo.com',
      '1 intel.mail.com',
      '5 org',
      '5 wiki.org',
    ]);
  });
});
