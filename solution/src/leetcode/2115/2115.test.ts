import { findAllRecipes } from './2115';

describe('LeetCode 2115', () => {
  test('Example 1', () => {
    expect(findAllRecipes(['bread'], [['yeast', 'flour']], ['yeast', 'flour', 'corn'])).toEqual([
      'bread',
    ]);
  });
  test('Example 2', () => {
    expect(
      findAllRecipes(
        ['bread', 'sandwich'],
        [
          ['yeast', 'flour'],
          ['bread', 'meat'],
        ],
        ['yeast', 'flour', 'meat'],
      ),
    ).toEqual(['bread', 'sandwich']);
  });
  test('Example 3', () => {
    expect(
      findAllRecipes(
        ['bread', 'sandwich', 'burger'],
        [
          ['yeast', 'flour'],
          ['bread', 'meat'],
          ['sandwich', 'meat', 'bread'],
        ],
        ['yeast', 'flour', 'meat'],
      ),
    ).toEqual(['bread', 'sandwich', 'burger']);
  });
});
