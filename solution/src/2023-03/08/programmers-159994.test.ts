import { bundleOfCards } from './programmers-159994';

describe('2023-03-09: Programmers 159994', () => {
  test('Example 1', () => {
    expect(
      bundleOfCards(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']),
    ).toBe('Yes');
  });
  test('Example 2', () => {
    expect(
      bundleOfCards(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']),
    ).toBe('No');
  });
});
