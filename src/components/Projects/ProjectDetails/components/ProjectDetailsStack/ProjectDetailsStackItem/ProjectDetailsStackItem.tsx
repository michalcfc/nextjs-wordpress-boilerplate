import React from 'react';

import { ProjectDetailsStackItemD } from './ProjectDetailsStackItem.d';

const ProjectDetailsStackItem: React.FC<ProjectDetailsStackItemD> = ({
  name,
}) => (
  <div>
    {name}
  </div>
);

export default ProjectDetailsStackItem;
