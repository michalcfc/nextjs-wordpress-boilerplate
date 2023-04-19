import { Link } from '../../Navbar.d';

export interface MobileNavItemD {
  name: string;
  href: string;
  desc?: string;
  children?: Link[];
}
