import {
  Category,
  Project_Projectfeatures,
} from '@/generated/graphql';

export interface ProjectContentD {
  name: string;
  desc: string;
  categories: Category[];
  projectFeatures: Project_Projectfeatures
}
