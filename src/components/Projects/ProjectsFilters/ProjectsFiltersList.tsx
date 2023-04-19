import React from 'react';

// components
import { TabList } from '@chakra-ui/react';

// types
import { ProjectsFiltersListD } from './ProjectsFiltersList.d';
import { ProjectsFiltersItem } from './component';

// constants
import { CATEGORY_NAME_ALL } from '@/components/Projects/constants';

const ProjectsFiltersList = ({ categories, nbOfProjects }: ProjectsFiltersListD) => (
  <TabList
    mb={8}
    gap={4}
    border={0}
    flexWrap="wrap"
    justifyContent="center"
  >
    {categories.map(({ name, count }) => (
      <ProjectsFiltersItem
        key={name}
        name={name ?? ''}
        count={name === CATEGORY_NAME_ALL ? nbOfProjects : count ?? 0}
      />
    ))}
  </TabList>
);

export default ProjectsFiltersList;
