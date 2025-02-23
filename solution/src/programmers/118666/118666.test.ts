import { testPersonality } from './118666';

describe('Programmers 118666', () => {
  test('Example 1', () => {
    expect(testPersonality(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])).toBe('TCMA');
  });
  test('Example 2', () => {
    expect(testPersonality(['TR', 'RT', 'TR'], [7, 1, 3])).toBe('RCJA');
  });
});
