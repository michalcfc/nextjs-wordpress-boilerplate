import { Link } from '../Navbar.d';

export interface MobileNavD {
  isOpen: boolean;
  items: Link[];

  ref: HTMLDivElement
}
