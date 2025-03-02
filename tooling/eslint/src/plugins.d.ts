/**
 * 타입을 지원하지 않는 ESLint Plugin에 대한 타입 정의
 */
declare module 'eslint-plugin-import' {
  import type { Linter, Rule } from 'eslint';

  export const flatConfigs: {
    recommended: Linter.Config;
    react: Linter.Config;
    typescript: Linter.Config;
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module 'eslint-plugin-react-hooks' {
  import type { Linter, Rule } from 'eslint';

  export const configs: {
    recommended: {
      rules: {
        'rules-of-hooks': Linter.RuleEntry;
        'exhaustive-deps': Linter.RuleEntry;
      };
    };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module '@next/eslint-plugin-next' {
  import type { Linter, Rule } from 'eslint';

  export const configs: {
    recommended: { rules: Linter.RulesRecord };
    'core-web-vitals': { rules: Linter.RulesRecord };
  };
  export const rules: Record<string, Rule.RuleModule>;
}
