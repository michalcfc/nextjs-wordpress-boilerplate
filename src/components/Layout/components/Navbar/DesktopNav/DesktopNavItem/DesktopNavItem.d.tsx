import { Link } from '../../Navbar.d';

export interface DesktopNavItemD {
  href: string;
  name: string;
  isScrolled: boolean
  children?: Link[];
}
