import { format } from 'date-fns';

/**
 * formatDate
 */

export function formatDate(date: string, pattern = 'PPP') {
  return format(new Date(date), pattern);
}

/**
 * sortObjectsByDate
 */

export function sortObjectsByDate(array: any, { key = 'date' as any } = {}) {
  return array.sort((a: string, b: string) => +new Date(b[key]) - +new Date(a[key]));
}
