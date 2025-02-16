/**
 * 1352. Product of the Last K Numbers
 * https://leetcode.com/problems/product-of-the-last-k-numbers
 */
export class ProductOfNumbers {
  private products: number[];

  constructor() {
    this.products = [1];
  }

  add(num: number): void {
    if (num === 0) {
      this.products = [1];
      return;
    }
    const lastProduct = this.products[this.products.length - 1];
    this.products.push(lastProduct * num);
  }

  getProduct(k: number): number {
    const n = this.products.length;
    if (n <= k) {
      return 0;
    }
    return this.products[n - 1] / this.products[n - k - 1];
  }
}
