import { ProductOfNumbers } from './1352';

describe('LeetCode 1352', () => {
  test('Example 1', () => {
    const productOfNumbers = new ProductOfNumbers();
    productOfNumbers.add(3);
    productOfNumbers.add(0);
    productOfNumbers.add(2);
    productOfNumbers.add(5);
    productOfNumbers.add(4);
    expect(productOfNumbers.getProduct(2)).toBe(20);
    expect(productOfNumbers.getProduct(3)).toBe(40);
    expect(productOfNumbers.getProduct(4)).toBe(0);
    productOfNumbers.add(8);
    expect(productOfNumbers.getProduct(2)).toBe(32);
  });
});
