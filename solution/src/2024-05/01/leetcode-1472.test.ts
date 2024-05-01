import { BrowserHistory } from './leetcode-1472';

describe('2024-05-01: LeetCode 1472', () => {
  test('Example 1', () => {
    const browserHistory = new BrowserHistory('leetcode.com');
    browserHistory.visit('google.com');
    browserHistory.visit('facebook.com');
    browserHistory.visit('youtube.com');
    expect(browserHistory.back(1)).toBe('facebook.com');
    expect(browserHistory.back(1)).toBe('google.com');
    expect(browserHistory.forward(1)).toBe('facebook.com');
    browserHistory.visit('linkedin.com');
    expect(browserHistory.forward(2)).toBe('linkedin.com');
    expect(browserHistory.back(2)).toBe('google.com');
    expect(browserHistory.back(7)).toBe('leetcode.com');
  });
});
