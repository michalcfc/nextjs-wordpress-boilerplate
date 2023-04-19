import React from 'react';

// components
import { Box, Link, Text } from '@chakra-ui/react';

// helpers
import { getSlugFromTitle } from '@/utils/getSlugFromTitle';

// types
import { ProjectPreviewContentD } from './ProjectPreviewContent.d';

const ProjectPreviewContent = ({ name }: ProjectPreviewContentD) => (
  <Box mt={4}>
    <Text
      fontSize="lg"
      fontWeight="bold"
    >
      {name}
    </Text>
    <Link
      top={0}
      left={0}
      width="100%"
      height="100%"
      overflow="hidden"
      position="absolute"
      href={`/project/${getSlugFromTitle(name)}`}
    />
  </Box>
);

export default ProjectPreviewContent;
