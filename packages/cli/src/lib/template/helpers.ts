import type { HelperDelegate } from 'handlebars';

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
} satisfies Record<string, HelperDelegate>;
