import { flip, pancakeSort } from './0969';

describe('LeetCode 0969', () => {
  function simulatePancakeSort(arr: number[], flips: number[]) {
    if (10 * arr.length < flips.length) {
      return false;
    }
    for (const k of flips) {
      flip(arr, k);
    }
    return arr;
  }

  test('Example 1', () => {
    const arr = [3, 2, 4, 1];
    const sorted = [...arr].sort((a, b) => a - b);
    expect(simulatePancakeSort([...arr], pancakeSort([...arr]))).toEqual(sorted);
  });
  test('Example 2', () => {
    const arr = [1, 2, 3];
    const sorted = [...arr].sort((a, b) => a - b);
    expect(simulatePancakeSort([...arr], pancakeSort([...arr]))).toEqual(sorted);
  });
});
