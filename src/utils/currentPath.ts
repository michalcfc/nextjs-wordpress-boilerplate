import { useRouter } from 'next/router';

export function currentPath() {
  const router = useRouter();
  return router.pathname;
}
