// queries
import {
  QUERY_ALL_PROJECTS,
  QUERY_SINGLE_PROJECT,
} from '@/data/projects';

// lib
import client from '@/lib/api';

// types
import { QueryIncludeD } from '@/lib/types';
import { Project } from '../generated/graphql';

/**
 * mapPostData
 */

export function mapProjectData(project = {}) {
  const data = { ...project } as Project;

  if (data.categories) {
    // @ts-ignore
    (data as Category[]).categories = data.categories.edges.map(({ node }) => ({
      ...node,
    }));
  }

  return data;
}

/**
 * getPathProjectBySlug
 */

export function projectPathBySlug(slug: string) {
  return `/project/${slug}`;
}

/**
 * getProjectBySlug
 */

export async function getProjectBySlug(slug: string) {
  const projectData = await client.query({
    query: QUERY_SINGLE_PROJECT,
    variables: {
      slug,
    },
  });

  const project = [projectData?.data.project].map(mapProjectData)[0];

  return {
    project,
  };
}

/**
 * getAllProjects
 */

const allPostsIncludesTypes = {
  all: QUERY_ALL_PROJECTS,
  index: QUERY_ALL_PROJECTS,
  archive: QUERY_ALL_PROJECTS,
};

export async function getAllProjects(options = {}) {
  const { queryIncludes = 'all' } = options as QueryIncludeD;

  const data = await client.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const projects = data?.data.projects.edges.map(({ node = {} }) => node);

  return {
    projects: Array.isArray(projects) && projects.map(mapProjectData),
  };
}
