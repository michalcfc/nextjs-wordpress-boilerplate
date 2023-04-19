import React from 'react';

// components
import { Heading, Text } from '@chakra-ui/react';

// types
import { ProjectDetailsHeaderD } from './ProjectDetailsHeader.d';

const ProjectDetailsHeader: React.FC<ProjectDetailsHeaderD> = ({
  title,
  subtitle,
}) => (
  <>
    <Heading
      as="h4"
      title={title}
      mb={4}
    />
    <Text color="muted">{subtitle}</Text>
  </>
);

export default ProjectDetailsHeader;
