import { suggestedProducts } from './leetcode-1268';

describe('2022-06-19: LeetCode 1268', () => {
  test('Example 1', () => {
    const products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
      searchWord = 'mouse';
    const answer = [
      ['mobile', 'moneypot', 'monitor'],
      ['mobile', 'moneypot', 'monitor'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
    ];
    expect(suggestedProducts(products, searchWord)).toEqual(answer);
  });

  test('Example 2', () => {
    const products = ['havana'],
      searchWord = 'havana';
    const answer = [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']];
    expect(suggestedProducts(products, searchWord)).toEqual(answer);
  });

  test('Example 3', () => {
    const products = ['bags', 'baggage', 'banner', 'box', 'cloths'],
      searchWord = 'bags';
    const answer = [
      ['baggage', 'bags', 'banner'],
      ['baggage', 'bags', 'banner'],
      ['baggage', 'bags'],
      ['bags'],
    ];
    expect(suggestedProducts(products, searchWord)).toEqual(answer);
  });
});
