import { partnerNumber } from './131128';

describe('Programmers 131128', () => {
  test('Example 1', () => {
    expect(partnerNumber('100', '2345')).toBe('-1');
  });

  test('Example 2', () => {
    expect(partnerNumber('100', '203045')).toBe('0');
  });

  test('Example 3', () => {
    expect(partnerNumber('100', '123450')).toBe('10');
  });

  test('Example 4', () => {
    expect(partnerNumber('12321', '42531')).toBe('321');
  });

  test('Example 5', () => {
    expect(partnerNumber('5525', '1255')).toBe('552');
  });
});
