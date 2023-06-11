import { range } from '@algorithm/lib';

/**
 * 134239. 우박수열 정적분
 * https://school.programmers.co.kr/learn/courses/30/lessons/134239
 */
function* collatzConjecture(k: number) {
  let n = k;
  yield n;
  while (1 < n) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
    yield n;
  }
}

export function hailStoneNumberDefiniteIntegral(k: number, ranges: [number, number][]): number[] {
  const hailStoneNumber = [...collatzConjecture(k)];

  const n = hailStoneNumber.length;
  const prefixSumForWidth = [0];
  for (const i of range(1, n)) {
    const width = (hailStoneNumber[i - 1] + hailStoneNumber[i]) / 2;
    prefixSumForWidth.push(prefixSumForWidth[i - 1] + width);
  }

  const getRangeWidth = ([startOffset, endOffset]: [number, number]) => {
    const [start, end] = [startOffset, n + endOffset - 1];
    if (end < start) {
      return -1;
    }
    return prefixSumForWidth[end] - prefixSumForWidth[start];
  };

  return ranges.map(getRangeWidth);
}
