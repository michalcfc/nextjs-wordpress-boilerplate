import { PageLayout } from './components/PageLayout';
import { MainLayout } from './components/MainLayout';
import { ProjectLayout } from './components/ProjectLayout';

export const Layouts = {
  Main: MainLayout,
  Page: PageLayout,
  Project: ProjectLayout,
};

export type LayoutKeys = keyof typeof Layouts;
