/**
 * 841. Keys and Rooms
 * https://leetcode.com/problems/keys-and-rooms
 */
export function canVisitAllRooms(rooms: number[][]): boolean {
  const n = rooms.length;
  const visited = new Set<number>([0]);

  let currentRooms = [0];

  while (0 < currentRooms.length) {
    const nextRooms: number[] = [];
    for (const currentRoom of currentRooms) {
      for (const nextRoom of rooms[currentRoom]) {
        if (!visited.has(nextRoom)) {
          visited.add(nextRoom);
          nextRooms.push(nextRoom);
        }
      }
    }
    currentRooms = nextRooms;
  }

  return visited.size === n;
}
