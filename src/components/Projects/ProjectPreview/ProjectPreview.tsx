import React from 'react';

// components
import { Box, useDisclosure } from '@chakra-ui/react';
import { ProjectPreviewContent, ProjectPreviewImg, ProjectPreviewModal } from './components';

// types
import { ProjectPreviewD } from './ProjectPreview.d';

const ProjectPreview = ({ img, name, slug }: ProjectPreviewD) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        role="group"
        bg="lightGray"
        p="5px 15px 20px"
        borderRadius="xl"
        position="relative"
        _hover={{
          bg: 'gray.100',
          cursor: 'pointer',
        }}
      >
        <ProjectPreviewImg
          img={img}
          name={name}
          slug={slug}
          setPreviewModalOpen={onOpen}
        />
        <ProjectPreviewContent name={name} />
      </Box>
      <ProjectPreviewModal
        slug={slug}
        name={name}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ProjectPreview;
