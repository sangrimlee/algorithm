import { findRestaurant } from './0599';

describe('LeetCode 0599', () => {
  test('Example 1', () => {
    expect(
      findRestaurant(
        ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'],
      ),
    ).toEqual(['Shogun']);
  });
  test('Example 2', () => {
    expect(
      findRestaurant(
        ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
        ['KFC', 'Shogun', 'Burger King'],
      ),
    ).toEqual(['Shogun']);
  });
  test('Example 3', () => {
    expect(findRestaurant(['happy', 'sad', 'good'], ['sad', 'happy', 'good'])).toEqual([
      'sad',
      'happy',
    ]);
  });
});
