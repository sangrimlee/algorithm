/**
 * 2127. Maximum Employees to Be Invited to a Meeting
 * https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting
 */
export function maximumInvitations(favorite: number[]): number {
  const n = favorite.length;
  const inDegrees = new Array<number>(n).fill(0);
  for (const person of favorite) {
    inDegrees[person] += 1;
  }

  let queue: number[] = [];
  inDegrees.forEach((inDegree, person) => {
    if (inDegree === 0) {
      queue.push(person);
    }
  });

  const depth = new Array<number>(n).fill(1);
  while (0 < queue.length) {
    const nextQueue: number[] = [];
    for (const currentNode of queue) {
      const nextNode = favorite[currentNode];
      depth[nextNode] = Math.max(depth[nextNode], depth[currentNode] + 1);
      inDegrees[nextNode] -= 1;
      if (inDegrees[nextNode] === 0) {
        nextQueue.push(nextNode);
      }
    }
    queue = nextQueue;
  }

  let longestCycleLength = 0;
  let twoCycleInvitaions = 0;
  for (let person = 0; person < n; person++) {
    if (inDegrees[person] === 0) {
      continue;
    }
    let cycleLength = 0;
    let currentNode = person;
    while (inDegrees[currentNode] !== 0) {
      inDegrees[currentNode] = 0;
      cycleLength += 1;
      currentNode = favorite[currentNode];
    }

    if (cycleLength === 2) {
      twoCycleInvitaions += depth[person] + depth[favorite[person]];
    } else {
      longestCycleLength = Math.max(longestCycleLength, cycleLength);
    }
  }
  return Math.max(longestCycleLength, twoCycleInvitaions);
}
