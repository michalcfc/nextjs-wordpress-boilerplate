import React from 'react';

// components
import {
  Stack,
  Text,
} from '@chakra-ui/react';
import { ProjectDetailsCategoriesItem } from './ProjectDetailsCategoriesItem';

// tyoes
import { ProjectDetailsCategoriesD } from './ProjectDetailsCategories.d';

const ProjectDetailsCategories: React.FC<ProjectDetailsCategoriesD> = ({
  categories,
}: ProjectDetailsCategoriesD) => (
  <Stack
    mt={3}
    flexDirection="column"
  >
    <Text fontWeight={600}>Kategorie:</Text>
    {categories.map(({ id, name }) => (
      <ProjectDetailsCategoriesItem
        key={id}
        name={name ?? ''}
      />
    ))}
  </Stack>
);

export default ProjectDetailsCategories;
