import { maxDepth } from './1614';

describe('LeetCode 1614', () => {
  test('Example 1', () => {
    expect(maxDepth('(1+(2*3)+(()/4))+1')).toBe(3);
  });
  test('Example 2', () => {
    expect(maxDepth('(1)+((2))+((()))')).toBe(3);
  });
});
