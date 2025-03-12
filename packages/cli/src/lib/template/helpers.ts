import type { HelperDelegate } from 'handlebars';
import { stringify } from 'yaml';

export const helpers = {
  add: (context: number, arg: number) => {
    return context + arg;
  },
  funcName: (text: string) => {
    const functionDeclarationRegex = /function\s+([a-zA-Z_$][\w$]*)/;
    const matched = functionDeclarationRegex.exec(text);
    return matched ? matched[1] : '';
  },
  removeComments: (text: string) => {
    return text.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
  },
  yaml: (value: unknown) => {
    return stringify(value);
  },
} satisfies Record<string, HelperDelegate>;
