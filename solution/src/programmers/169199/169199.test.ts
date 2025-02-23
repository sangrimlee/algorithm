import { ricochetRobot } from './169199';

describe('Programmers 169199', () => {
  test('Example 1', () => {
    expect(ricochetRobot(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....'])).toBe(7);
  });
  test('Example 2', () => {
    expect(ricochetRobot(['.D.R', '....', '.G..', '...D'])).toBe(-1);
  });
});
