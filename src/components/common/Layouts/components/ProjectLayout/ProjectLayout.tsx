// components
import { Grid } from '@chakra-ui/react';
import { Header } from '@/components/Layout/components/Header';
import { Main } from '@/components/Layout/components/Main';
import { Footer } from '@/components/Layout/components/Footer';

// types
import { ProjectLayoutD } from './ProjectLayout.d';

const ProjectLayout = ({ children }: ProjectLayoutD) => (
  <Grid
    minHeight="100vh"
    templateAreas={`
            "header header"
            "main main"
            "footer footer"`}
    gridTemplateRows="auto 1fr auto"
  >
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </Grid>
);

export default ProjectLayout;
