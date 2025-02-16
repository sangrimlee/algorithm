/**
 * 1964. Find the Longest Valid Obstacle Course at Each Position
 * https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position
 */
export function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
  const upperBound = (arr: number[], num: number) => {
    let [start, end] = [0, arr.length];

    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] <= num) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return end;
  };

  const n = obstacles.length;
  const answer: number[] = new Array<number>(n).fill(1);
  const arr: number[] = [];

  obstacles.forEach((height, i) => {
    const target = upperBound(arr, height);
    if (target === arr.length) {
      arr.push(height);
    } else {
      arr[target] = height;
    }
    answer[i] = target + 1;
  });

  return answer;
}
