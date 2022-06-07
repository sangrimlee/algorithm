/**
 * 68936. 쿼드압축 후 개수 세기
 * https://programmers.co.kr/learn/courses/30/lessons/68936
 */

export function solution(arr: number[][]): [number, number] {
  const n = arr.length;
  const dy = [0, 1, 0, 1];
  const dx = [0, 0, 1, 1];

  function compress(y: number, x: number, size: number): [number, number] {
    if (size === 1) {
      return arr[y][x] ? [0, 1] : [1, 0];
    }
    let [numZeros, numOnes] = [0, 0];
    for (let i = 0; i < 4; i++) {
      const [ny, nx] = [y + (size >> 1) * dy[i], x + (size >> 1) * dx[i]];
      const [numZero, numOne] = compress(ny, nx, size >> 1);
      numZeros += numZero;
      numOnes += numOne;
    }
    return numZeros === 0
      ? [0, 1]
      : numOnes === 0
      ? [1, 0]
      : [numZeros, numOnes];
  }

  return compress(0, 0, n);
}

/* 누적합을 이용한 풀이 */
class PrefixSum {
  n: number;
  prefixSum: number[][];

  constructor(arr: number[][]) {
    this.n = arr.length;
    this.prefixSum = Array.from({ length: this.n + 1 }).map(() =>
      new Array(this.n + 1).fill(0)
    );
    arr.forEach((row, y) => {
      row.forEach((num, x) => {
        this.prefixSum[y + 1][x + 1] =
          num +
          this.prefixSum[y + 1][x] +
          this.prefixSum[y][x + 1] -
          this.prefixSum[y][x];
      });
    });
  }

  sum(y: number, x: number, size: number): number {
    return (
      this.prefixSum[y + size][x + size] -
      this.prefixSum[y + size][x] -
      this.prefixSum[y][x + size] +
      this.prefixSum[y][x]
    );
  }
}

export function solutionWithPrefixSum(arr: number[][]): [number, number] {
  const n = arr.length;
  const prefixSum = new PrefixSum(arr);

  let [numZero, numOne] = [0, 0];
  function compress(y: number, x: number, size: number): void {
    const sum = prefixSum.sum(y, x, size);
    if (sum === 0 || sum === size ** 2) {
      if (sum === 0) {
        numZero += 1;
      } else {
        numOne += 1;
      }
    } else {
      compress(y, x, size >> 1);
      compress(y + (size >> 1), x, size >> 1);
      compress(y, x + (size >> 1), size >> 1);
      compress(y + (size >> 1), x + (size >> 1), size >> 1);
    }
  }

  compress(0, 0, n);

  return [numZero, numOne];
}
