import { useMemo } from 'react';

import {
  Category,
  Project,
} from '@/generated/graphql';
import { CATEGORY_NAME_ALL } from '@/components/Projects/constants';

export const getDefaultCategoryId = (allProjectsCategories: Category[]) => {
  const defaultCategoryId = allProjectsCategories
    .findIndex((category) => category.name === CATEGORY_NAME_ALL);
  return defaultCategoryId;
};
export const getNotEmptyCategories = (categories: Category[]) => {
  const categoriesWithProjects = (categories || [])
    .filter(({
      name,
      count,
    }) => name === CATEGORY_NAME_ALL || count !== null);
  return categoriesWithProjects;
};
export const getFilteredProjectsByCategory = (
  projects: Project[],
  selectedCategoryName: string,
) => {
  const filteredProjects = (projects || []).filter((project: Project) => {
    // @ts-ignore
    const projectCategories = (project.categories ?? []).map(
      ({ name }: Category) => (name ?? '').toLowerCase(),
    );
    return (projectCategories ?? []).includes(selectedCategoryName);
  });
  return filteredProjects;
};

export const setProjectsList = (
  projects: Project[],
  selectedCategoryId: string,
) => {
  const projectsList = useMemo(() => {
    const selectedCategoryName = selectedCategoryId?.toLowerCase();
    const filteredProjects = getFilteredProjectsByCategory(
      projects,
      selectedCategoryName,
    );
    const projectList = selectedCategoryId === '' ? projects : filteredProjects;

    return projectList;
  }, [selectedCategoryId]);

  return projectsList;
};

export const getProjectsByCategory = (
  projects: Project[],
  selectedCategory: string,
) => {
  const allProjects = setProjectsList(projects, selectedCategory);
  return allProjects;
};
