// components
import { Box, Link } from '@chakra-ui/react';

// types
import { ProjectActionsD } from './ProjectActions.d';

const ProjectActions = ({ name }: ProjectActionsD) => (
  <Box mt={3}>
    <Link mb={2} width="100%" type="button" variant="success" href="/contact">
      {name}
    </Link>
    <Link mt={4} width="100%" type="button" variant="ghost" href="/contact">
      {name}
    </Link>
  </Box>
);

export default ProjectActions;
