import React from 'react';

import { ProjectDetailsStackD } from './ProjectDetailsStack.d';

import { ProjectDetailsStackItem } from './ProjectDetailsStackItem';

const ProjectDetailsStack: React.FC<ProjectDetailsStackD> = ({
  stack,
}) => (
  <>
    {stack.map((s) => (
      <ProjectDetailsStackItem name={s} />
    ))}
  </>
);

export default ProjectDetailsStack;
