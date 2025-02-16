import { dedent } from 'ts-dedent';

function createPlainFrontMatter(key: string, value: string | number) {
  return `${key}: ${value.toString()}`;
}

function createArrayFrontMatter(key: string, values: (string | number)[]) {
  if (values.length === 0) {
    return '';
  }

  return dedent`${key}:
  ${values.map((value) => `- ${value.toString()}`).join('\n')}`;
}

export function createFrontMatterTemplate(
  frontMatter: Record<string, string | number | (string | number)[]>,
) {
  return dedent`---
  ${Object.entries(frontMatter)
    .map(([key, value]) =>
      Array.isArray(value)
        ? createArrayFrontMatter(key, value)
        : createPlainFrontMatter(key, value),
    )
    .join('\n')}
  ---`;
}
