import React from 'react';

// components
import { Grid } from '@chakra-ui/react';
import { ProjectPreview } from '../ProjectPreview';

// types
import { ProjectsListD } from './ProjectsList.d';

const ProjectsList = ({ projects }: ProjectsListD) => (
  <Grid
    gap={6}
    gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
  >
    {projects.map(({ slug, title, featuredImage }) => (
      <ProjectPreview
        key={title}
        slug={slug ?? ''}
        name={title ?? ''}
        img={featuredImage?.node.sourceUrl ?? ''}
      />
    ))}
  </Grid>
);

export default ProjectsList;
