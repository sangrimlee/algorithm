/**
 * 148653. 마법의 엘리베이터
 * https://school.programmers.co.kr/learn/courses/30/lessons/148653
 */
export function magicalElevator(storey: number) {
  function divmod(num: number, divisor: number): [number, number] {
    return [Math.floor(num / divisor), num % divisor];
  }

  let [answer, currentNum] = [0, storey];
  while (0 < currentNum) {
    const [nextNum, diff] = divmod(currentNum, 10);
    if (5 < diff || (diff === 5 && 5 <= nextNum % 10)) {
      answer += 10 - diff;
      currentNum = nextNum + 1;
    } else {
      answer += diff;
      currentNum = nextNum;
    }
  }

  return answer;
}
