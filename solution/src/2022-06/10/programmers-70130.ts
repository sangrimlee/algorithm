/**
 * 70130. 스타 수열
 * https://programmers.co.kr/learn/courses/30/lessons/70130
 */

function createCounter(a: number[]) {
  const counter = new Map<number, number>();
  a.forEach((num) => {
    counter.set(num, (counter.get(num) || 0) + 1);
  });
  return counter;
}

function createStarSequence(a: number[], num: number) {
  let result = 0;
  let [start, end] = [0, 1];
  while (end < a.length) {
    if ((a[start] === num || a[end] === num) && a[start] !== a[end]) {
      start = end + 1;
      end = start + 1;
      result += 1;
    } else {
      end += 1;
    }
  }
  return result;
}

export function solution(a: number[]) {
  const counter = createCounter(a);

  let answer = 0;
  Array.from(counter.entries()).forEach(([num, numCount]) => {
    if (answer < numCount) {
      answer = Math.max(answer, createStarSequence(a, num));
    }
  });
  return answer * 2;
}
