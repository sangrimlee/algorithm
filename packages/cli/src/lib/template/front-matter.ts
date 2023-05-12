import dedent from 'ts-dedent';

function createPlainFrontMatter(key: string, value: string | number) {
  return `${key}: ${value}`;
}

function createArrayFrontMatter(key: string, values: (string | number)[]) {
  return dedent`${key}:
  ${values.map((value) => `- ${value}`).join('\n')}`;
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
