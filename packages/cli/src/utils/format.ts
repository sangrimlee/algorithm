import prettier from 'prettier';

export function format(
  source: string,
  parser: prettier.LiteralUnion<prettier.BuiltInParserName, string> | prettier.CustomParser,
) {
  return prettier.format(source, {
    printWidth: 100,
    semi: true,
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'all',
    parser,
  });
}
