import { twMerge } from 'tailwind-merge';

import { cx } from './cx';
import type { ClassValue } from './cx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(cx(inputs));
}
