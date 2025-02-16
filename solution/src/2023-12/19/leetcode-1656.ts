/**
 * 1656. Design an Ordered Stream
 * https://leetcode.com/problems/design-an-ordered-stream
 */
export class OrderedStream {
  private ptr: number;
  private readonly size: number;
  private readonly data: string[];

  constructor(n: number) {
    this.ptr = 0;
    this.size = n;
    this.data = new Array<string>(n).fill('');
  }

  insert(idKey: number, value: string): string[] {
    const i = idKey - 1;
    this.data[i] = value;
    if (this.ptr < i) {
      return [];
    }
    const result = [];
    while (this.ptr < this.size && this.data[this.ptr] !== '') {
      result.push(this.data[this.ptr]);
      this.ptr += 1;
    }
    return result;
  }
}
