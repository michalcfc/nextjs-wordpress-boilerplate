import {
  Category,
  Project,
} from '@/generated/graphql';

export interface ProjectsD {
  projects: {
    projects: Project[]
  }
  categories: {
    categories: Category[]
  }
}
