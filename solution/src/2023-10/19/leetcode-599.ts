/**
 * 599. Minimum Index Sum of Two Lists
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists
 */
export function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map(list1.map((s, i) => [s, i]));

  let answer: string[] = [];
  let maxIndexSum = list1.length + list2.length;
  list2.forEach((s, i2) => {
    const i1 = map.get(s);
    if (i1 === undefined) {
      return;
    }
    const indexSum = i1 + i2;
    if (indexSum < maxIndexSum) {
      maxIndexSum = indexSum;
      answer = [s];
    } else if (indexSum === maxIndexSum) {
      answer.push(s);
    }
  });

  return answer;
}
