export type Link = {
  id?: number;
  name: string;
  href: string;
  desc?: string;

  children?: Link[];
};
