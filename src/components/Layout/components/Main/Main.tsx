import { GridItem } from '@chakra-ui/react';
import { MainD } from './Main.d';

const Main = ({ children }: MainD) => (
  <GridItem area="main">{children}</GridItem>
);

export default Main;
