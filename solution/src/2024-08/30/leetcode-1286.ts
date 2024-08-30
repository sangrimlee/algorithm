/**
 * 1286. Iterator for Combination
 * https://leetcode.com/problems/iterator-for-combination
 */
export class CombinationIterator {
  public characters: string;
  public length: number;
  public combinationLength: number;
  private mask: number;

  constructor(characters: string, combinationLength: number) {
    this.characters = characters;
    this.length = characters.length;
    this.combinationLength = combinationLength;
    this.mask = ((1 << combinationLength) - 1) << (this.length - combinationLength);
  }

  private updateMask() {
    const t = this.mask + 1;
    const u = t ^ this.mask;
    const v = t & this.mask;
    this.mask = v - (v & -v) / (u + 1);
  }

  next(): string {
    let combination = '';
    for (let i = this.length - 1; 0 <= i; i--) {
      if (this.mask & (1 << i)) {
        combination += this.characters[this.length - i - 1];
      }
    }
    this.updateMask();
    return combination;
  }

  hasNext(): boolean {
    return Boolean(this.mask);
  }
}
