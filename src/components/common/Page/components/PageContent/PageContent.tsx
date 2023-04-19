import React from 'react';

// components
import { Container } from '@chakra-ui/react';

// types
import { PageContentD } from './PageContent.d';

const PageContent: React.FC<PageContentD> = ({ children }) => (
  <Container
    my={20}
    maxW="7xl"
  >
    {children}
  </Container>
);

export default PageContent;
