import { Heap } from '@algorithm/lib';

/**
 * 121686. [PCCP 모의고사 #1] 운영체제
 * https://school.programmers.co.kr/learn/courses/30/lessons/121686
 */
export function operatingSystem(program: number[][]): number[] {
  const sortArrFn = (a: number[], b: number[]) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }
      return a[i] - b[i];
    }
    return -1;
  };

  const answer = new Array<number>(11).fill(0);
  const heap = new Heap<number[]>(sortArrFn);
  program.sort((a, b) => b[1] - a[1]);

  const popUntilCurrentTime = (currentTime: number) => {
    while (0 < program.length && program[program.length - 1][1] <= currentTime) {
      const firstProgram = program.pop();
      if (firstProgram) {
        heap.push(firstProgram);
      }
    }
  };

  let currentTime = program[program.length - 1][1];
  popUntilCurrentTime(currentTime);
  while (0 < heap.length) {
    const currentProgram = heap.pop();
    if (!currentProgram) {
      continue;
    }
    const [score, callTime, execTime] = currentProgram;
    const waitTime = currentTime - callTime;
    answer[score] += waitTime;
    currentTime = currentTime + execTime;
    popUntilCurrentTime(currentTime);
    if (heap.length === 0 && 0 < program.length) {
      currentTime = program[program.length - 1][1];
      popUntilCurrentTime(currentTime);
    }
  }

  answer[0] = currentTime;
  return answer;
}
