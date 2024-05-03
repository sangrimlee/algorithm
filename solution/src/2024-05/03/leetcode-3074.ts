/**
 * 3074. Apple Redistribution into Boxes
 * https://leetcode.com/problems/apple-redistribution-into-boxes
 */
export function minimumBoxes(apple: number[], capacity: number[]): number {
  capacity.sort((a, b) => b - a);
  let remain = apple.reduce((acc, count) => acc + count, 0);
  for (let i = 0; i < capacity.length; i++) {
    if (remain <= capacity[i]) {
      return i + 1;
    }
    remain -= capacity[i];
  }
  throw new Error("It's impossible to redistribute packs of apples into boxes.");
}
