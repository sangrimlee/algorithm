import { Tabs } from 'nextra/components';
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

import { Badges, LevelBadge, TopicBadge, ProblemLink } from './components/mdx';

const themeComponents = getThemeComponents({
  Badges,
  LevelBadge,
  TopicBadge,
  ProblemLink,
  Tabs,
});

/** @type {getThemeComponents} */
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
  };
}
