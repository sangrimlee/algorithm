/**
 * 3024. Type of Triangle
 * https://leetcode.com/problems/type-of-triangle
 */
export function triangleType(nums: number[]): string {
  const [a, b, c] = nums.sort((a, b) => a - b);
  const type = a + b > c ? new Set(nums).size : -1;
  switch (type) {
    case 1:
      return 'equilateral';
    case 2:
      return 'isosceles';
    case 3:
      return 'scalene';
    default:
      return 'none';
  }
}
