/**
 * 969. Pancake Sorting
 * https://leetcode.com/problems/pancake-sorting
 */
export function pancakeSort(arr: number[]): number[] {
  const n = arr.length;
  const answer: number[] = [];
  for (let num = n; 0 < num; num--) {
    const numIndex = arr.indexOf(num);
    if (numIndex === num - 1) {
      continue;
    }
    if (numIndex !== 0) {
      answer.push(numIndex + 1);
      flip(arr, numIndex + 1);
    }
    answer.push(num);
    flip(arr, num);
  }
  return answer;
}

export function flip(arr: number[], k: number) {
  const mid = Math.ceil(k / 2);
  for (let i = 0; i < mid; i++) {
    [arr[i], arr[k - i - 1]] = [arr[k - i - 1], arr[i]];
  }
}
