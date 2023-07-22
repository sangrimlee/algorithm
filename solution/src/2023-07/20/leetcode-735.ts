/**
 * 735. Asteroid Collision
 * https://leetcode.com/problems/asteroid-collision
 */
export function asteroidCollision(asteroids: number[]): number[] {
  const remainAsteroids: number[] = [];

  for (const asteroid of asteroids) {
    let isExploded = false;
    while (
      0 < remainAsteroids.length &&
      0 < remainAsteroids[remainAsteroids.length - 1] &&
      asteroid < 0 &&
      !isExploded
    ) {
      const lastRemainAsteroid = remainAsteroids[remainAsteroids.length - 1];
      // 만약 남아있는 마지막 소행성이 더 작거나 같으면, 마지막 소행성은 폭발
      if (Math.abs(lastRemainAsteroid) <= Math.abs(asteroid)) {
        remainAsteroids.pop();
      }
      // 마지막 소행성보다 같으면, 두 소행성 모두 폭발하게되고,
      // 마지막 소행성이 더 크다면, 해당 소행성은 남아있게 된다.
      isExploded = Math.abs(lastRemainAsteroid) >= Math.abs(asteroid);
    }

    if (!isExploded) {
      remainAsteroids.push(asteroid);
    }
  }

  return remainAsteroids;
}
