/**
 * 496. Next Greater Element I
 * https://leetcode.com/problems/next-greater-element-i
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextGreaterNum = new Map<number, number>();
  const stack: number[] = [];
  for (const num of nums2) {
    while (0 < stack.length && stack[stack.length - 1] < num) {
      nextGreaterNum.set(stack[stack.length - 1], num);
      stack.pop();
    }
    stack.push(num);
  }
  return nums1.map((num) => nextGreaterNum.get(num) ?? -1);
}
