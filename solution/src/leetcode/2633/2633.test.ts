import { jsonStringify } from './2633';

describe('LeetCode 2633', () => {
  test('Example 1', () => {
    expect(jsonStringify({ y: 1, x: 2 })).toBe('{"y":1,"x":2}');
  });
  test('Example 2', () => {
    expect(jsonStringify({ a: 'str', b: -12, c: true, d: null })).toBe(
      '{"a":"str","b":-12,"c":true,"d":null}',
    );
  });
  test('Example 3', () => {
    expect(jsonStringify({ key: { a: 1, b: [{}, null, 'Hello'] } })).toBe(
      '{"key":{"a":1,"b":[{},null,"Hello"]}}',
    );
  });
  test('Example 4', () => {
    expect(jsonStringify(true)).toBe('true');
  });
});
