import { ParkingSystem } from './1603';

describe('LeetCode 1603', () => {
  test('Example 1', () => {
    const parkingSystem = new ParkingSystem(1, 1, 0);

    expect(parkingSystem.addCar(1)).toBeTruthy();
    expect(parkingSystem.addCar(2)).toBeTruthy();
    expect(parkingSystem.addCar(3)).toBeFalsy();
    expect(parkingSystem.addCar(1)).toBeFalsy();
  });
});
