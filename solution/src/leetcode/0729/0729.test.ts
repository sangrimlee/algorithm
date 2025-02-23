import { MyCalendar } from './0729';

describe('LeetCode 0729', () => {
  test('Example 1', () => {
    const calendar = new MyCalendar();
    expect(calendar.book(10, 20)).toBe(true);
    expect(calendar.book(15, 25)).toBe(false);
    expect(calendar.book(20, 30)).toBe(true);
  });
});
