import React from 'react';

// components
import { SimpleGrid } from '@chakra-ui/react';

// types
import { ProjectDetailsBoxD } from './ProjectDetailsBox.d';

const ProjectDetailsBox: React.FC<ProjectDetailsBoxD> = ({ children }) => (
  <SimpleGrid
    mb={10}
    py={10}
    bg="brand"
    borderRadius="lg"
    justifyContent="center"
    columns={{ base: 1, md: 5 }}
  >
    {children}
  </SimpleGrid>
);

export default ProjectDetailsBox;
