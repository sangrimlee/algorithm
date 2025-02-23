import { toGoatLatin } from './0824';

describe('LeetCode 0824', () => {
  test('Example 1', () => {
    expect(toGoatLatin('I speak Goat Latin')).toBe('Imaa peaksmaaa oatGmaaaa atinLmaaaaa');
  });
  test('Example 2', () => {
    expect(toGoatLatin('The quick brown fox jumped over the lazy dog')).toBe(
      'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa',
    );
  });

  test('Example 3', () => {
    expect(toGoatLatin('Each word consists of lowercase and uppercase letters only')).toBe(
      'Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa',
    );
  });
});
