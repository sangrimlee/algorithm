/**
 * 786. K-th Smallest Prime Fraction
 * https://leetcode.com/problems/k-th-smallest-prime-fraction
 */
export function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  const n = arr.length;
  let [left, right] = [0, 1];
  while (left < right) {
    const mid = (left + right) / 2;
    let maxFraction = 0;
    let smallerFractions = 0;
    let [numerator, denominator] = [0, 0];

    for (let i = 0, j = 1; i < n - 1; i++) {
      while (j < n && arr[i] >= mid * arr[j]) {
        j += 1;
      }
      smallerFractions += n - j;

      if (j === n) {
        break;
      }

      const fraction = arr[i] / arr[j];
      if (maxFraction < fraction) {
        [numerator, denominator] = [i, j];
        maxFraction = fraction;
      }
    }

    if (smallerFractions === k) {
      return [arr[numerator], arr[denominator]];
    }

    if (smallerFractions > k) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return [];
}
