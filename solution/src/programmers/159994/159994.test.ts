import { bundleOfCards } from './159994';

describe('Programmers 159994', () => {
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
