import {
  Category,
  Project,
} from '@/generated/graphql';

export interface ProjectsSectionD {
  projects: {
    projects: Project[]
  }
  categories: {
    categories: Category[]
  }
}
