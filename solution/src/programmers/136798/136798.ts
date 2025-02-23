/**
 * 136798. 기사단원의 무기
 * https://school.programmers.co.kr/learn/courses/30/lessons/136798
 */
export function knightlyWeapon(number: number, limit: number, power: number) {
  const isSquared = (num: number) => Math.sqrt(num) % 1 === 0;

  const countDivisor = (num: number) => {
    let count = 0;
    for (let i = 1; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        count += 2;
      }
    }
    return isSquared(num) ? count + 1 : count;
  };

  const getPower = (num: number) => {
    const divisorCount = countDivisor(num);
    return divisorCount <= limit ? divisorCount : power;
  };

  let answer = 0;
  for (let i = 0; i < number; i++) {
    answer += getPower(i + 1);
  }
  return answer;
}
