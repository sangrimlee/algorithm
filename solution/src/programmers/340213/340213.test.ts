import { playVideos } from './340213';

describe('Programmers 340213', () => {
  test('Example 1', () => {
    expect(playVideos('34:33', '13:00', '00:55', '02:55', ['next', 'prev'])).toBe('13:00');
  });
  test('Example 2', () => {
    expect(playVideos('10:55', '00:05', '00:15', '06:55', ['prev', 'next', 'next'])).toBe('06:55');
  });
  test('Example 3', () => {
    expect(playVideos('07:22', '04:05', '00:15', '04:07', ['next'])).toBe('04:17');
  });
});
