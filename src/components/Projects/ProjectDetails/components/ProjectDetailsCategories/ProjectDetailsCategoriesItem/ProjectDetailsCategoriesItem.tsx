import React from 'react';

// components
import {
  Box,
  Link,
} from '@chakra-ui/react';

// types
import { ProjectDetailsCategoriesItemD } from './ProjectDetailsCategoriesItem.d';

const ProjectDetailsCategoriesItem = ({
  name,
}: ProjectDetailsCategoriesItemD) => (
  <Box
    mt={4}
  >
    <Link
      px={3}
      py={1}
      fontSize="sm"
      bg="gray"
      href="/tag/name"
      borderRadius="md"
      textDecoration="none"
      _hover={{
        bg: 'brand',
        borderColor: 'brand',
        textDecoration: 'none',
      }}
    >
      #
      {name}
    </Link>
  </Box>
);

export default ProjectDetailsCategoriesItem;
