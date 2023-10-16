import { format } from '@/utils/format';

function createTableRowTemplate(cols: string[]) {
  return `| ${cols.join(' | ')} |`;
}

function createTableHeadTemplate(cols: string[]) {
  return createTableRowTemplate(cols);
}

const TABLE_ALIGN = {
  default: '---',
  left: ':--',
  right: '--:',
  center: ':-:',
} as const;

type TableAlign = keyof typeof TABLE_ALIGN;

function createTableAlignTemplate(aligns: TableAlign | TableAlign[]) {
  if (typeof aligns === 'string') {
    return createTableRowTemplate(new Array(aligns.length).fill(TABLE_ALIGN[aligns]));
  }
  return createTableRowTemplate(aligns.map((align) => TABLE_ALIGN[align]));
}

export function createTableTemplate(
  thead: string[],
  trows: string[][],
  aligns: TableAlign | TableAlign[] = 'default',
) {
  if (Array.isArray(aligns) && thead.length !== aligns.length) {
    throw new Error('thead의 column수와 align의 column수가 일치하지 않습니다');
  }
  if (thead.length !== trows[0].length) {
    throw new Error('thead의 column수와 trow의 column수가 일치하지 않습니다');
  }

  return format(
    `${createTableHeadTemplate(thead)}
     ${createTableAlignTemplate(aligns)}
     ${trows.map(createTableRowTemplate).join('\n')}`,
    'markdown',
  );
}
