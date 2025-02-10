import { Tabs } from 'nextra/components';
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

import { Badge, ProblemLink } from './components/mdx';

const themeComponents = getThemeComponents({
  ProblemLink,
  Tabs,
  Badge,
});

/** @type {getThemeComponents} */
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
  };
}
