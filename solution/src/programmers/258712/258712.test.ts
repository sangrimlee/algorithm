import { receivedGift } from './258712';

describe('LeetCode 258712', () => {
  test('Example 1', () => {
    expect(
      receivedGift(
        ['muzi', 'ryan', 'frodo', 'neo'],
        [
          'muzi frodo',
          'muzi frodo',
          'ryan muzi',
          'ryan muzi',
          'ryan muzi',
          'frodo muzi',
          'frodo ryan',
          'neo muzi',
        ],
      ),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      receivedGift(
        ['joy', 'brad', 'alessandro', 'conan', 'david'],
        [
          'alessandro brad',
          'alessandro joy',
          'alessandro conan',
          'david alessandro',
          'alessandro david',
        ],
      ),
    ).toBe(4);
  });
  test('Example 3', () => {
    expect(receivedGift(['a', 'b', 'c'], ['a b', 'b a', 'c a', 'a c', 'a c', 'c a'])).toBe(0);
  });
});
