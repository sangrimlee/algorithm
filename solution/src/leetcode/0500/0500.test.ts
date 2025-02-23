import { findWords } from './0500';

describe('LeetCode 0500', () => {
  test('Example 1', () => {
    expect(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])).toEqual(['Alaska', 'Dad']);
  });
  test('Example 2', () => {
    expect(findWords(['omk'])).toEqual([]);
  });
  test('Example 3', () => {
    expect(findWords(['adsdf', 'sfd'])).toEqual(['adsdf', 'sfd']);
  });
});
