import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
} from '@chakra-ui/react';

// styles
import styles from '@/styles/project.module.css';

// utils
import { sanitize } from '@/utils/sanitize';

// components
import { ProjectVideo } from './components';

// types
import { ProjectContentD } from './ProjectContent.d';
import { ProjectDetails } from '@/components/Projects/ProjectDetails';
import { ProjectDetailsCategories } from '@/components/Projects/ProjectDetails/components';

const ProjectContent = ({
  name,
  desc,
  categories,
  projectFeatures,
}: ProjectContentD) => {
  const {
    client,
    embed,
    type,
  } = projectFeatures;

  return (
    <>
      <ProjectVideo
        title={name}
        client={client ?? ''}
        videoUri={embed ?? ''}
      />
      <Container
        mt={10}
        mb={20}
        maxW="7xl"
      >
        <ProjectDetails
          title={name}
          client={client ?? ''}
        />
        <article>
          <div
            className={styles.project}
            dangerouslySetInnerHTML={{ __html: sanitize(desc) }}
          />
        </article>
        <Box mt={10}>
          {type && (
            <Flex>
              <Text
                mr={1}
                fontWeight={600}
              >
                Rodzaj zlecenia:
              </Text>
              <Text>
                {type ?? ''}
              </Text>
            </Flex>
          )}
          <ProjectDetailsCategories categories={categories} />
        </Box>
      </Container>
    </>
  );
};

export default ProjectContent;
