import React, { useState } from 'react';

// components
import {
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { ProjectsList } from './ProjectsList';
import { ProjectsFiltersList } from './ProjectsFilters';

// helpers
import {
  getDefaultCategoryId,
  getNotEmptyCategories,
  getProjectsByCategory,
} from './helpers';

// types
import { ProjectsD } from './Projects.d';
import { Project } from '@/generated/graphql';
import { CATEGORY_NAME_ALL } from '@/components/Projects/constants';

const Projects = ({ projects, categories }: ProjectsD) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const allProjectsCategories = getNotEmptyCategories(categories?.categories);
  const defaultCategoryId = getDefaultCategoryId(allProjectsCategories);
  const projectsByCategory = getProjectsByCategory(
    projects?.projects,
    selectedCategory,
  ) as Project[];

  const setProjectsCategory = (index: number) => {
    const selectedCategoryName = allProjectsCategories[index].name as string;
    if (selectedCategoryName !== CATEGORY_NAME_ALL) {
      setSelectedCategory(selectedCategoryName);
    } else {
      setSelectedCategory('');
    }
  };

  return (
    <Tabs
      defaultIndex={defaultCategoryId}
      onChange={(index) => setProjectsCategory(index)}
    >
      <ProjectsFiltersList
        nbOfProjects={projects?.projects?.length}
        categories={allProjectsCategories}
      />
      <TabPanels>
        {allProjectsCategories.map((projectCategory) => (
          <TabPanel key={projectCategory.name}>
            <ProjectsList projects={projectsByCategory} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
export default Projects;
