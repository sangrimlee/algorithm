import { MyCalendar } from './leetcode-729';

describe('2024-09-26: LeetCode 729', () => {
  test('Example 1', () => {
    const calendar = new MyCalendar();
    expect(calendar.book(10, 20)).toBe(true);
    expect(calendar.book(15, 25)).toBe(false);
    expect(calendar.book(20, 30)).toBe(true);
  });
});
