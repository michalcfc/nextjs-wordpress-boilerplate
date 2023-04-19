// components
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

// types
import { ProjectDetailsD } from './ProjectDetails.d';

const ProjectDetails = ({ title, client }: ProjectDetailsD) => (
  <Box
    pb={4}
    mb={5}
    borderBottom="1px solid lightGray"
  >
    <Heading
      as="h2"
      mb={1}
      fontSize="3xl"
    >
      {title}
    </Heading>
    {client && (
      <Text color="muted">
        na zlecenie
        {' '}
        {client}
      </Text>
    )}
  </Box>
);

export default ProjectDetails;
