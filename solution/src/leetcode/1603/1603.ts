/**
 * 1603. Design Parking System
 * https://leetcode.com/problems/design-parking-system
 */
export class ParkingSystem {
  private readonly slots: {
    1: number;
    2: number;
    3: number;
  };

  constructor(big: number, medium: number, small: number) {
    this.slots = {
      1: big,
      2: medium,
      3: small,
    };
  }

  addCar(carType: 1 | 2 | 3): boolean {
    if (this.slots[carType] <= 0) {
      return false;
    }
    this.slots[carType] -= 1;
    return true;
  }
}
