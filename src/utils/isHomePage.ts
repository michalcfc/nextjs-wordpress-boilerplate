import { useRouter } from 'next/router';

export function isHomePage() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  return isHomePage;
}
