/**
 * 401. Binary Watch
 * https://leetcode.com/problems/binary-watch
 */
export function readBinaryWatch(turnedOn: number): string[] {
  const countBit = (num: number) => {
    const matched = num.toString(2).match(/1/g);
    return matched ? matched.length : 0;
  };

  const getTime = (hour: number, minute: number) => {
    return `${hour}:${minute.toString().padStart(2, '0')}`;
  };

  const answer: string[] = [];
  for (let hour = 0; hour < 12; hour++) {
    const hourCount = countBit(hour);
    for (let minute = 0; minute < 60; minute++) {
      const minuteCount = countBit(minute);
      if (hourCount + minuteCount === turnedOn) {
        answer.push(getTime(hour, minute));
      }
    }
  }

  return answer;
}
