import { decodeAtIndex } from './0880';

describe('LeetCode 0880', () => {
  test('Example 1', () => {
    expect(decodeAtIndex('leet2code3', 10)).toBe('o');
  });
  test('Example 2', () => {
    expect(decodeAtIndex('ha22', 5)).toBe('h');
  });
  test('Example 3', () => {
    expect(decodeAtIndex('a2345678999999999999999', 1)).toBe('a');
  });
  test('Example 4', () => {
    expect(
      decodeAtIndex(
        'jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt',
        731963130,
      ),
    ).toBe('b');
  });
});
