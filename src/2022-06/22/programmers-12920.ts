/**
 * 12920. 선입 선출 스케줄링
 * https://programmers.co.kr/learn/courses/30/lessons/12920
 */

function available(cores: number[], totalTime: number): number {
  return cores.reduce((prev, curr) => prev + Math.floor(totalTime / curr), 0);
}

function lowerBound(remain: number, cores: number[]): number {
  let [left, right] = [0, Math.min(...cores) * remain];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (remain <= available(cores, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

export function solution(n: number, cores: number[]) {
  if (n <= cores.length) {
    return n;
  }
  const remain = n - cores.length;
  const totalTime = lowerBound(remain, cores);
  let numberOfOrder =
    remain -
    cores.reduce((prev, curr) => prev + Math.floor((totalTime - 1) / curr), 0);

  let answer = 0;
  while (0 < numberOfOrder) {
    if (totalTime % cores[answer] === 0) {
      numberOfOrder -= 1;
    }
    answer += 1;
  }
  return answer;
}
