import { countOfAtoms } from './0726';

describe('LeetCode 0726', () => {
  test('Example 1', () => {
    expect(countOfAtoms('H2O')).toBe('H2O');
  });
  test('Example 2', () => {
    expect(countOfAtoms('Mg(OH)2')).toBe('H2MgO2');
  });
  test('Example 3', () => {
    expect(countOfAtoms('K4(ON(SO3)2)2')).toBe('K4N2O14S4');
  });
});
