/**
 * 340213. [PCCP 기출문제] 1번 / 동영상 재생기
 * https://school.programmers.co.kr/learn/courses/30/lessons/340213
 */
export function playVideos(
  videoLen: string,
  pos: string,
  opStart: string,
  opEnd: string,
  commands: string[],
): string {
  const videoEndSec = convertToSec(videoLen);
  const opStartSec = convertToSec(opStart);
  const opEndSec = convertToSec(opEnd);

  // 오프닝 구간이라면, 오프닝 끝나는 시간으로 이동, 아니면 현재 시간을 유지
  const skipOp = (sec: number): number => {
    return opStartSec <= sec && sec <= opEndSec ? opEndSec : sec;
  };

  // 주어진 명령어 `prev` 또는 `next`를 수행 후, 오프닝 스킵을 실행
  const operate = (sec: number, command: string): number => {
    return skipOp(command === 'prev' ? Math.max(0, sec - 10) : Math.min(videoEndSec, sec + 10));
  };

  // 명령어들을 순차적으로 실행하여 최종 시간을 계산하고, "mm:ss" 형식으로 반환
  return convertToTime(commands.reduce(operate, skipOp(convertToSec(pos))));
}

// "mm:ss" 형식의 문자열을 초 단위의 숫자로 변환
function convertToSec(time: string): number {
  const [minute, second] = time.split(':').map(Number);
  return 60 * minute + second;
}

// 초 단위의 숫자를 "mm:ss" 형식의 문자열로 변환
function convertToTime(sec: number): string {
  const minute = String(Math.floor(sec / 60));
  const second = String(sec % 60);
  return `${minute.padStart(2, '0')}:${second.padStart(2, '0')}`;
}
