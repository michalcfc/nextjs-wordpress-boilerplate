// components
import { Projects } from '@/components/Projects';
import { SectionWrapper } from '@/components/Sections/components';

// types
import { ProjectsSectionD } from './ProjectsSection.d';

const ProjectsSection = ({ projects, categories }: ProjectsSectionD) => (
  <SectionWrapper
    title="Nasze projekty filmowe"
    subtitle="Zobacz, jakie projekty filmowe udało nam się zrealizować dla naszych partnerów. Przejrzyj nasze gotowe realizacje, aby zainspirować się pomysłami i zobaczyć, jak możemy pomóc Ci w realizacji Twojego filmu."
  >
    <Projects
      projects={projects ?? []}
      categories={categories ?? []}
    />
  </SectionWrapper>
);

export default ProjectsSection;
