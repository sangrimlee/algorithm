import { dedent } from 'ts-dedent';

interface CodeBlockOptions {
  language: string;
  fileName: string;
  copy?: boolean;
  showLineNumbers?: boolean;
}

export function createCodeBlockTemplate(
  code: string,
  { language, fileName, copy = false, showLineNumbers = false }: CodeBlockOptions,
) {
  const isOn = (flag: boolean, ret: string) => (flag ? ret : '');

  return dedent`\`\`\`${language} filename="${fileName}" ${isOn(copy, 'copy')} ${isOn(
    showLineNumbers,
    'showLineNumbers',
  )}
  ${code}
  \`\`\``;
}
