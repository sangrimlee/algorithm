'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cx } from '@/utils/cx';
import { useCallback } from 'react';

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, [setTheme]);

  return (
    <Button type="button" size="icon" variant="ghost" onClick={toggleTheme} className="relative">
      <span className="sr-only">Toggle theme</span>
      <SunIcon
        absoluteStrokeWidth
        className={cx('absolute fill-current transition', 'dark:scale-0 dark:opacity-0')}
      />
      <MoonIcon
        absoluteStrokeWidth
        className={cx(
          'absolute scale-0 fill-current opacity-0 transition',
          'dark:scale-100 dark:opacity-100',
        )}
      />
    </Button>
  );
}
