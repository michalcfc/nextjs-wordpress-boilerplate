export type Cta = {
  name: string;
  uri: string;
};

export type HeroD = {
  img: string;
  strap?: string;
  title: string;
  subtitle?: string;
  primary_cta: Cta;
  secondary_cta?: Cta;
};
