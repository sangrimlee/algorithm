import { format as prettier } from 'prettier';
import type { Options } from 'prettier';

export function format(source: string, parser: Options['parser']) {
  return prettier(source, {
    printWidth: 100,
    semi: true,
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'all',
    parser,
  });
}
