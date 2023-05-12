function createTableRowTemplate(cols: string[]) {
  return `| ${cols.join(' | ')} |`;
}

function createTableHeadTemplate(cols: string[]) {
  const divider = cols.map((_, i) => (i === 0 ? ':-' : i === cols.length - 1 ? '-:' : ':-:'));
  return [createTableRowTemplate(cols), createTableRowTemplate(divider)].join('\n');
}

export function createTableTemplate(thead: string[], trows: string[][]) {
  if (thead.length !== trows[0].length) {
    throw new Error('thead의 column수와 trow의 column수가 일치하지 않습니다');
  }
  return `${createTableHeadTemplate(thead)}\n${trows.map(createTableRowTemplate).join('\n')}`;
}
