/**
 * 2125. Number of Laser Beams in a Bank
 * https://leetcode.com/problems/number-of-laser-beams-in-a-bank
 */
export function numberOfBeams(bank: string[]): number {
  function countDevice(row: string) {
    return row.replace(/0+/g, '').length;
  }

  let answer = 0;
  let prevNumberOfDevice = 0;
  bank.forEach((row) => {
    const numberOfDevice = countDevice(row);
    if (numberOfDevice === 0) {
      return;
    }
    answer += prevNumberOfDevice * numberOfDevice;
    prevNumberOfDevice = numberOfDevice;
  });
  return answer;
}
