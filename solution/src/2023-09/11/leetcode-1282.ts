/**
 * 1282. Group the People Given the Group Size They Belong To
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to
 */
export function groupThePeople(groupSizes: number[]): number[][] {
  const groups = new Map<number, number[][]>();
  groupSizes.forEach((groupSize, i) => {
    const group = groups.get(groupSize);
    if (!group) {
      groups.set(groupSize, [[i]]);
    } else if (group[group.length - 1].length === groupSize) {
      group.push([i]);
    } else {
      group[group.length - 1].push(i);
    }
  });

  return Array.from(groups.values()).flatMap((v) => v);
}
