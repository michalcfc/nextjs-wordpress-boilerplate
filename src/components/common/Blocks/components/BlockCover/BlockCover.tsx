// types
import { BlockCoverD } from './BlockCover.d';
import { Hero } from '@/components/Hero';

const BlockCover = ({ attributes }: BlockCoverD) => (
  <Hero
    img={attributes.img}
    title={attributes.title}
    primary_cta={attributes.title}
  />
);

export default BlockCover;
