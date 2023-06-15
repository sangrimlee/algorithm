import { ricochetRobot } from './programmers-169199';

describe('2023-06-14: Programmers 169199', () => {
  test('Example 1', () => {
    expect(ricochetRobot(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....'])).toEqual(7);
  });
  test('Example 2', () => {
    expect(ricochetRobot(['.D.R', '....', '.G..', '...D'])).toEqual(-1);
  });
});
