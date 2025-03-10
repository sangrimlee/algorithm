import handlebars from 'handlebars';

import { format } from '@/utils/format';
import { README_TEMPLATE } from './templates/readme';
import { SOLUTION_TEMPLATE, SOLUTION_TEST_TEMPLATE } from './templates/solution';
import { helpers } from './helpers';

const TEMPLATES = {
  SOLUTION: {
    template: SOLUTION_TEMPLATE,
    parser: 'typescript',
  },
  SOLUTION_TEST: {
    template: SOLUTION_TEST_TEMPLATE,
    parser: 'typescript',
  },
  README: {
    template: README_TEMPLATE,
    parser: 'markdown',
  },
} as const;

export async function createTemplate(templateName: keyof typeof TEMPLATES, data: unknown) {
  const { template, parser } = TEMPLATES[templateName];

  handlebars.registerHelper(helpers);
  const result = await format(handlebars.compile(template)(data), parser);
  return result;
}
