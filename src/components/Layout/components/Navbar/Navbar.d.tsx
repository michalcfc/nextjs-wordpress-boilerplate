export type Link = {
  id?: number;
  label: string;
  path: string;
  desc?: string;
  children?: Link[];
};
