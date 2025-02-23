/**
 * 70129. 이진 변환 반복하기
 * https://programmers.co.kr/learn/courses/30/lessons/70129
 */

export function solution(s: string): [number, number] {
  let removeCount = 0;
  let removeZeroCount = 0;

  function removeZero(s: string): void {
    if (s === '1') {
      return;
    }
    const zeroCount = s.match(/0/g)?.length ?? 0;
    removeCount += 1;
    removeZeroCount += zeroCount;
    removeZero((s.length - zeroCount).toString(2));
  }

  removeZero(s);

  return [removeCount, removeZeroCount];
}
