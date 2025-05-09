/**
 * 특정 횟수의 루프에 사용되는 제너레이터 함수
 *
 * @param {number} [start=0] 시작 숫자 (기본 값 0)
 * @param {number} end 마지막 숫자
 * @param {number=} [step=1] 숫자 간격 (기본값 1)
 *
 * @example
 * range(4); // returns 0 1 2 3
 * range(1, 6, 2); // returns 1 3 5
 */
export function* range(start: number, end?: number, step = 1) {
  if (step === 0) {
    throw new Error('Value Error: range() arg 3 must not be zero');
  }
  let value = end === undefined ? 0 : start;
  const endValue = end ?? start;

  const outOfRange = (value: number) => {
    if (step < 0) {
      return endValue < value;
    }
    return value < endValue;
  };

  while (outOfRange(value)) {
    yield value;
    value += step;
  }
}
