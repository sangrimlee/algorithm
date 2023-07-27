describe('2023-07-26: LeetCode 1870', () => {
  test('Example 1', () => {
    expect(solution([1, 3, 2], 6)).toEqual(1);
  });
  test('Example 2', () => {
    expect(solution([1, 3, 2], 2.7)).toEqual(3);
  });
  test('Example 3', () => {
    expect(solution([1, 3, 2], 1.9)).toEqual(-1);
  });
});
